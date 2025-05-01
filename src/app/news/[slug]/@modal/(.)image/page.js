/*http://localhost:3000/news/us-tariff-impact-thai-economy/image
Intercepted Route = แยกว่าต้นทางมาจากไหน
แสดงหน้านี้เมื่อมีการคลิก link ในเว็บ
*/
//Components ที่ต้องรับรู้ทางฝั่ง Client
'use client';
import { useRouter } from 'next/navigation';
import { DUMMY_NEWS } from "@/data/dummy-news";
import { notFound } from "next/navigation";
import { use } from 'react';
export default function InterceptedImageModal({params}){
    const router = useRouter();
    const {slug} = use(params);
    const newsItem = DUMMY_NEWS.find(item => item.slug === slug);
if(!newsItem) notFound();
return (<>
{/* แสดงภาพเป็นรูปแบบ modal */}
<div className="modal-backdrop" onClick={router.back}></div>
{/*stopPropagation = หยุดการส่งไปที่ parent อื่น (ถ้าไม่ใส่จะทำให้กลับไปหน้าข่าว เมื่อกดที่รูปภาพ)*/}
<dialog open className="modal" onClick={(e)=> e.stopPropagation()}>
<div className="fullscreen-image">
<img
    src={`/images/news/${newsItem.image}`}
    alt={newsItem.title}
/>
</div></dialog></>);

}