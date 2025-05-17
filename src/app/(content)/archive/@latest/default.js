import NewsList from '@/app/components/NewsList';
//ข่าวล่าสุด
import { getLatestNews } from '@/lib/news';

export default function LatestNewsPage(){
    const latesNews = getLatestNews();

    return (<>
    <h2>Latest News</h2>
    <NewsList news = {latesNews}/>
    </>)
}