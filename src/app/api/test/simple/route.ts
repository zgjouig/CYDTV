// app/api/test/simple/route.ts（示例路径，以实际项目结构为准）
export const runtime = 'edge'; // 关键：声明该路由使用 Edge Runtime

// 原有的路由处理逻辑（示例）
export async function GET() {
  return new Response('Hello from Edge Runtime!');
}
