//
import { DUMMY_NEWS } from '@/data/dummy-news';

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

//ถ้าระบุปี (year) ก็เรียกดูข่าวที่อยู่ในเดือนนั้น (months)
export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        //ไม่ต้องบวกตอน push
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}

export function addNews(newsItem) {
  //ข่าวใหม่จะอยู่ข้างหน้า
  DUMMY_NEWS.slice(0,0,newsItem);
}

//หา id ที่ระบุ
export function updateNews(id, newData) {
  const index = DUMMY_NEWS.findIndex((item) => item.id === id);
  if (index !== -1) {
    DUMMY_NEWS[index] = { ...DUMMY_NEWS[index], ...newData };
  }
}

export function deleteNews(id) {
  const index = DUMMY_NEWS.findIndex((item) => item.id === id);
  if (index !== -1) {
    DUMMY_NEWS.splice(index, 1);
  }
}
