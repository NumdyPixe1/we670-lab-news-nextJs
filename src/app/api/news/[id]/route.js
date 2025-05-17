/*
    ระบุด้วย id
    /api/news/[id]
*/
import { DUMMY_NEWS } from '@/data/dummy-news';
import { updateNews, deleteNews } from '@/lib/news';

/*
    ค้นหาข่าวด้วย id
    http://localhost:3000/api/news/n1
*/
export async function GET(_,{params}) {
    const {id} = await params;
    const index = DUMMY_NEWS.findIndex((item) => item.id === id);
    //ถ้าไม่เจอ id ที่ระบุ  
    if (index == -1) {
        return new Response("News not found", {status: 404})
    }
    return Response.json(DUMMY_NEWS[index]);
}

export async function PUT(request, { params }) {
  const body = await request.json();
  const { id } = await params;

  if (!body.title && !body.content && !body.slug) {
    return Response.json({ error: 'Nothing to update' }, { status: 400 });
  }

  updateNews(id, body);
  return Response.json({ message: `News ${params.id} updated` });
}

export async function DELETE(_, { params }) {
  const { id } = await params;

  deleteNews(id);
  return new Response(null, { status: 204 });
}