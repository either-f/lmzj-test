import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Network, Search, Filter } from 'lucide-react';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: number;
  radius: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
  value: number;
}

export default function KnowledgeGraphPage() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Clear previous graph
    d3.select(svgRef.current).selectAll("*").remove();

    const nodes: Node[] = [
      { id: "天坛祈年殿", group: 1, radius: 30 },
      { id: "明永乐", group: 2, radius: 20 },
      { id: "清乾隆", group: 2, radius: 20 },
      { id: "楠木", group: 3, radius: 15 },
      { id: "重檐攒尖顶", group: 4, radius: 25 },
      { id: "无钉结构", group: 4, radius: 25 },
      { id: "皇天上帝", group: 5, radius: 20 },
      { id: "孟春祈谷", group: 5, radius: 20 },
      { id: "故宫太和殿", group: 1, radius: 25 },
      { id: "重檐庑殿顶", group: 4, radius: 20 },
    ];

    const links: Link[] = [
      { source: "天坛祈年殿", target: "明永乐", value: 1 },
      { source: "天坛祈年殿", target: "清乾隆", value: 1 },
      { source: "天坛祈年殿", target: "楠木", value: 2 },
      { source: "天坛祈年殿", target: "重檐攒尖顶", value: 2 },
      { source: "天坛祈年殿", target: "无钉结构", value: 2 },
      { source: "天坛祈年殿", target: "皇天上帝", value: 1 },
      { source: "天坛祈年殿", target: "孟春祈谷", value: 1 },
      { source: "故宫太和殿", target: "明永乐", value: 1 },
      { source: "故宫太和殿", target: "重檐庑殿顶", value: 2 },
      { source: "故宫太和殿", target: "楠木", value: 1 },
    ];

    const color = d3.scaleOrdinal<number, string>()
      .domain([1, 2, 3, 4, 5])
      .range(["#f59e0b", "#3b82f6", "#10b981", "#8b5cf6", "#ec4899"]);

    const simulation = d3.forceSimulation<Node>(nodes)
      .force("link", d3.forceLink<Node, Link>(links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(d => (d as Node).radius + 10));

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height]);

    // Add zoom capabilities
    const g = svg.append("g");
    svg.call(d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      }));

    const link = g.append("g")
      .attr("stroke", "#e7e5e4")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    const node = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag<SVGGElement, Node>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    node.append("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => color(d.group))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .attr("class", "shadow-sm transition-all hover:brightness-110 cursor-pointer");

    node.append("text")
      .text(d => d.id)
      .attr("x", 0)
      .attr("y", d => d.radius + 15)
      .attr("text-anchor", "middle")
      .attr("fill", "#44403c")
      .attr("font-size", "12px")
      .attr("font-weight", "500")
      .attr("class", "select-none pointer-events-none");

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!);

      node
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300 h-[calc(100vh-theme(spacing.14))] flex flex-col">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900 flex items-center gap-2">
            <Network className="w-6 h-6 text-amber-600" />
            知识图谱
          </h1>
          <p className="text-stone-500 text-sm mt-1">探索建筑、朝代、构件与历史事件的关联网络</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text" 
              placeholder="搜索节点..." 
              className="pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 w-64"
            />
          </div>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            筛选关系
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden relative">
        {/* Legend */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg border border-stone-100 shadow-sm text-xs space-y-2 z-10">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f59e0b]" /> 建筑实体</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3b82f6]" /> 历史朝代</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#10b981]" /> 材质</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#8b5cf6]" /> 建筑构件</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ec4899]" /> 概念/事件</div>
        </div>

        {/* D3 Container */}
        <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      </div>
    </div>
  );
}
