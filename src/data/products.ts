import type { Product } from '../context/CartContext';

export const products: Product[] = [
  // DVDs
  {
    id: 1,
    name: 'DVD Phim Kinh Điển - The Godfather',
    price: 150000,
    image: 'https://gw.alicdn.com/imgextra/O1CN013PS1dA1OdTBeB1B1i_!!6000000001728-2-yinhe.png_540x540.jpg',
    category: 'DVD',
    description: 'Bộ phim kinh điển về gia đình mafia Corleone, được đánh giá là một trong những tác phẩm điện ảnh vĩ đại nhất mọi thời đại.',
    details: 'Định dạng: DVD-9 | Thời lượng: 175 phút | Phụ đề: Tiếng Việt, English | Phân loại: 18+'
  },
  {
    id: 2,
    name: 'DVD Phim Hành Động - Fast & Furious',
    price: 120000,
    image: 'https://i5.walmartimages.com/seo/Fast-Furious-8-DVD-New-Box-Art-DVD_a32da109-1c35-471d-a031-66c34009770a.6055c7df4c1b9068643306183b10a94c.jpeg',
    category: 'DVD',
    description: 'Loạt phim hành động tốc độ cao với những cảnh đua xe đầy kịch tính và những pha nguy hiểm ngoạn mục.',
    details: 'Định dạng: DVD-9 | Thời lượng: 107 phút | Phụ đề: Tiếng Việt, English | Phân loại: 13+'
  },
  {
    id: 3,
    name: 'DVD Phim Khoa Học Viễn Tưởng - Interstellar',
    price: 180000,
    image: 'https://m.media-amazon.com/images/I/51BULTmAYbL._AC_UF894,1000_QL80_.jpg',
    category: 'DVD',
    description: 'Hành trình không gian đầy cảm xúc của nhóm phi hành gia tìm kiếm hành tinh mới cho nhân loại.',
    details: 'Định dạng: DVD-9 | Thời lượng: 169 phút | Phụ đề: Tiếng Việt, English | Phân loại: 13+'
  },
  {
    id: 4,
    name: 'DVD Phim Tình Cảm - The Notebook',
    price: 130000,
    image: 'https://dinostudio.vn/wp-content/uploads/2024/03/379063911_844061910441541_8260274388910798893_n.jpg',
    category: 'DVD',
    description: 'Câu chuyện tình yêu lãng mạn và cảm động về một cặp đôi vượt qua mọi khó khăn để đến với nhau.',
    details: 'Định dạng: DVD-9 | Thời lượng: 123 phút | Phụ đề: Tiếng Việt, English | Phân loại: 13+'
  },
  
  // CDs
  {
    id: 5,
    name: 'CD Nhạc Pop - Taylor Swift',
    price: 200000,
    image: 'https://upload.wikimedia.org/wikipedia/vi/1/1f/Taylor_Swift_-_Taylor_Swift.png',
    category: 'CD',
    description: 'Album tổng hợp những ca khúc hit nhất của Taylor Swift với chất lượng âm thanh cao cấp.',
    details: 'Định dạng: Audio CD | Số bài hát: 15 | Thời lượng: 65 phút | Chất lượng: 16-bit/44.1kHz'
  },
  {
    id: 6,
    name: 'CD Nhạc Rock - The Beatles',
    price: 250000,
    image: 'https://districtm.vn/wp-content/uploads/2021/06/The-Beatles-%E2%80%93-Beatles-For-Sale.jpg',
    category: 'CD',
    description: 'Album remastered của ban nhạc huyền thoại The Beatles với những bản hit bất hủ.',
    details: 'Định dạng: Audio CD | Số bài hát: 17 | Thời lượng: 72 phút | Chất lượng: 24-bit/96kHz'
  },
  {
    id: 7,
    name: 'CD Nhạc Jazz - Miles Davis',
    price: 220000,
    image: 'https://bizweb.dktcdn.net/thumb/grande/100/411/628/products/milesdaviskindofblue.png?v=1711889582053',
    category: 'CD',
    description: 'Tuyển tập những tác phẩm jazz kinh điển của nghệ sĩ trumpet huyền thoại Miles Davis.',
    details: 'Định dạng: Audio CD | Số bài hát: 12 | Thời lượng: 58 phút | Chất lượng: 16-bit/44.1kHz'
  },
  {
    id: 8,
    name: 'CD Nhạc Cổ Điển - Beethoven',
    price: 180000,
    image: 'https://product.hstatic.net/1000304920/product/-dien-the-masterpieces-of-beetthoven-vinyl-lp-record-store-saigon-hcmc_701a0123ecd34a2880e95327c3448f30.jpg',
    category: 'CD',
    description: 'Bản ghi âm chất lượng cao các bản giao hưởng nổi tiếng của nhà soạn nhạc thiên tài Beethoven.',
    details: 'Định dạng: Audio CD | Số bài hát: 9 | Thời lượng: 78 phút | Chất lượng: 24-bit/96kHz'
  },
  
  // Vinyl Records
  {
    id: 9,
    name: 'Đĩa Than - Pink Floyd - The Dark Side',
    price: 800000,
    image: 'https://vinylsaigon.vn/wp-content/uploads/2022/08/darksideofthemoon.webp',
    category: 'Đĩa Than',
    description: 'Album huyền thoại của Pink Floyd, một kiệt tác của progressive rock với âm thanh analog ấm áp.',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Remastered 2023'
  },
  {
    id: 10,
    name: 'Đĩa Than - Led Zeppelin IV',
    price: 750000,
    image: 'https://vocrecords.vn/wp-content/uploads/2023/03/18861868.jpg',
    category: 'Đĩa Than',
    description: 'Album kinh điển của Led Zeppelin với những bản hit như "Stairway to Heaven" và "Black Dog".',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Remastered 2023'
  },
  {
    id: 11,
    name: 'Đĩa Than - The Rolling Stones',
    price: 700000,
    image: 'https://vinylsaigon.vn/wp-content/uploads/2024/06/3.webp',
    category: 'Đĩa Than',
    description: 'Tuyển tập những ca khúc hay nhất của The Rolling Stones với chất lượng âm thanh vinyl nguyên bản.',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Limited Edition'
  },
  {
    id: 12,
    name: 'Đĩa Than - Bob Dylan - Highway 61',
    price: 850000,
    image: 'https://vocrecords.vn/wp-content/uploads/2024/03/194398903712.jpg',
    category: 'Đĩa Than',
    description: 'Album mang tính biểu tượng của Bob Dylan, một tác phẩm nghệ thuật trong lịch sử âm nhạc.',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Remastered 2023'
  },
  
  // Books
  {
    id: 13,
    name: 'Sách - Đắc Nhân Tâm',
    price: 120000,
    image: 'https://sachhoc.com/image/cache/catalog/Khoinghiep/Dac-nhan-tam-500x554.jpg',
    category: 'Sách',
    description: 'Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử, giúp bạn xây dựng mối quan hệ tốt đẹp với mọi người.',
    details: 'Tác giả: Dale Carnegie | Số trang: 320 | Ngôn ngữ: Tiếng Việt | Bìa: Cứng | NXB: Trẻ'
  },
  {
    id: 14,
    name: 'Sách - Nhà Giả Kim',
    price: 100000,
    image: 'https://jes.edu.vn/wp-content/uploads/2022/11/nha-gia-kim-pdf.jpg',
    category: 'Sách',
    description: 'Câu chuyện triết học sâu sắc về hành trình tìm kiếm kho báu và ý nghĩa cuộc sống của một cậu bé chăn cừu.',
    details: 'Tác giả: Paulo Coelho | Số trang: 192 | Ngôn ngữ: Tiếng Việt | Bìa: Mềm | NXB: Hội Nhà Văn'
  },
  {
    id: 15,
    name: 'Sách - Sapiens',
    price: 250000,
    image: 'https://sachmoi.net/wp-content/uploads/2021/12/review-sach-sapiens-luoc-su-loai-nguoi-PDF.jpg',
    category: 'Sách',
    description: 'Lịch sử ngắn gọn của loài người, khám phá cách chúng ta trở thành giống loài thống trị Trái Đất.',
    details: 'Tác giả: Yuval Noah Harari | Số trang: 512 | Ngôn ngữ: Tiếng Việt | Bìa: Cứng | NXB: Trẻ'
  },
  {
    id: 16,
    name: 'Sách - Tôi Tài Giỏi Bạn Cũng Thế',
    price: 150000,
    image: 'https://dilib.vn/img/news/2022/09/larger/390-toi-tai-gioi-ban-cung-the-1.jpg?v=1092',
    category: 'Sách',
    description: 'Cuốn sách truyền cảm hứng về phương pháp học tập hiệu quả và phát triển tư duy tích cực.',
    details: 'Tác giả: Adam Khoo | Số trang: 288 | Ngôn ngữ: Tiếng Việt | Bìa: Mềm | NXB: Trẻ'
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

