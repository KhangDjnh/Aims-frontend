import type { Product } from '../context/CartContext';

export const products: Product[] = [
  // DVDs
  {
    id: 1,
    name: 'DVD Phim Kinh Điển - The Godfather',
    price: 150000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=DVD+The+Godfather',
    category: 'DVD',
    description: 'Bộ phim kinh điển về gia đình mafia Corleone, được đánh giá là một trong những tác phẩm điện ảnh vĩ đại nhất mọi thời đại.',
    details: 'Định dạng: DVD-9 | Thời lượng: 175 phút | Phụ đề: Tiếng Việt, English | Phân loại: 18+'
  },
  {
    id: 2,
    name: 'DVD Phim Hành Động - Fast & Furious',
    price: 120000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=DVD+Fast+Furious',
    category: 'DVD',
    description: 'Loạt phim hành động tốc độ cao với những cảnh đua xe đầy kịch tính và những pha nguy hiểm ngoạn mục.',
    details: 'Định dạng: DVD-9 | Thời lượng: 107 phút | Phụ đề: Tiếng Việt, English | Phân loại: 13+'
  },
  {
    id: 3,
    name: 'DVD Phim Khoa Học Viễn Tưởng - Interstellar',
    price: 180000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=DVD+Interstellar',
    category: 'DVD',
    description: 'Hành trình không gian đầy cảm xúc của nhóm phi hành gia tìm kiếm hành tinh mới cho nhân loại.',
    details: 'Định dạng: DVD-9 | Thời lượng: 169 phút | Phụ đề: Tiếng Việt, English | Phân loại: 13+'
  },
  {
    id: 4,
    name: 'DVD Phim Tình Cảm - The Notebook',
    price: 130000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=DVD+Notebook',
    category: 'DVD',
    description: 'Câu chuyện tình yêu lãng mạn và cảm động về một cặp đôi vượt qua mọi khó khăn để đến với nhau.',
    details: 'Định dạng: DVD-9 | Thời lượng: 123 phút | Phụ đề: Tiếng Việt, English | Phân loại: 13+'
  },
  
  // CDs
  {
    id: 5,
    name: 'CD Nhạc Pop - Taylor Swift',
    price: 200000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=CD+Taylor+Swift',
    category: 'CD',
    description: 'Album tổng hợp những ca khúc hit nhất của Taylor Swift với chất lượng âm thanh cao cấp.',
    details: 'Định dạng: Audio CD | Số bài hát: 15 | Thời lượng: 65 phút | Chất lượng: 16-bit/44.1kHz'
  },
  {
    id: 6,
    name: 'CD Nhạc Rock - The Beatles',
    price: 250000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=CD+Beatles',
    category: 'CD',
    description: 'Album remastered của ban nhạc huyền thoại The Beatles với những bản hit bất hủ.',
    details: 'Định dạng: Audio CD | Số bài hát: 17 | Thời lượng: 72 phút | Chất lượng: 24-bit/96kHz'
  },
  {
    id: 7,
    name: 'CD Nhạc Jazz - Miles Davis',
    price: 220000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=CD+Miles+Davis',
    category: 'CD',
    description: 'Tuyển tập những tác phẩm jazz kinh điển của nghệ sĩ trumpet huyền thoại Miles Davis.',
    details: 'Định dạng: Audio CD | Số bài hát: 12 | Thời lượng: 58 phút | Chất lượng: 16-bit/44.1kHz'
  },
  {
    id: 8,
    name: 'CD Nhạc Cổ Điển - Beethoven',
    price: 180000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=CD+Beethoven',
    category: 'CD',
    description: 'Bản ghi âm chất lượng cao các bản giao hưởng nổi tiếng của nhà soạn nhạc thiên tài Beethoven.',
    details: 'Định dạng: Audio CD | Số bài hát: 9 | Thời lượng: 78 phút | Chất lượng: 24-bit/96kHz'
  },
  
  // Vinyl Records
  {
    id: 9,
    name: 'Đĩa Than - Pink Floyd - The Dark Side',
    price: 800000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=Vinyl+Pink+Floyd',
    category: 'Đĩa Than',
    description: 'Album huyền thoại của Pink Floyd, một kiệt tác của progressive rock với âm thanh analog ấm áp.',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Remastered 2023'
  },
  {
    id: 10,
    name: 'Đĩa Than - Led Zeppelin IV',
    price: 750000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=Vinyl+Led+Zeppelin',
    category: 'Đĩa Than',
    description: 'Album kinh điển của Led Zeppelin với những bản hit như "Stairway to Heaven" và "Black Dog".',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Remastered 2023'
  },
  {
    id: 11,
    name: 'Đĩa Than - The Rolling Stones',
    price: 700000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=Vinyl+Stones',
    category: 'Đĩa Than',
    description: 'Tuyển tập những ca khúc hay nhất của The Rolling Stones với chất lượng âm thanh vinyl nguyên bản.',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Limited Edition'
  },
  {
    id: 12,
    name: 'Đĩa Than - Bob Dylan - Highway 61',
    price: 850000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=Vinyl+Bob+Dylan',
    category: 'Đĩa Than',
    description: 'Album mang tính biểu tượng của Bob Dylan, một tác phẩm nghệ thuật trong lịch sử âm nhạc.',
    details: 'Định dạng: Vinyl LP | Tốc độ: 33 1/3 RPM | Kích thước: 12 inch | Trọng lượng: 180g | Remastered 2023'
  },
  
  // Books
  {
    id: 13,
    name: 'Sách - Đắc Nhân Tâm',
    price: 120000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=Sach+Dac+Nhan+Tam',
    category: 'Sách',
    description: 'Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử, giúp bạn xây dựng mối quan hệ tốt đẹp với mọi người.',
    details: 'Tác giả: Dale Carnegie | Số trang: 320 | Ngôn ngữ: Tiếng Việt | Bìa: Cứng | NXB: Trẻ'
  },
  {
    id: 14,
    name: 'Sách - Nhà Giả Kim',
    price: 100000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=Sach+Nha+Gia+Kim',
    category: 'Sách',
    description: 'Câu chuyện triết học sâu sắc về hành trình tìm kiếm kho báu và ý nghĩa cuộc sống của một cậu bé chăn cừu.',
    details: 'Tác giả: Paulo Coelho | Số trang: 192 | Ngôn ngữ: Tiếng Việt | Bìa: Mềm | NXB: Hội Nhà Văn'
  },
  {
    id: 15,
    name: 'Sách - Sapiens',
    price: 250000,
    image: 'https://via.placeholder.com/500x500/667eea/ffffff?text=Sach+Sapiens',
    category: 'Sách',
    description: 'Lịch sử ngắn gọn của loài người, khám phá cách chúng ta trở thành giống loài thống trị Trái Đất.',
    details: 'Tác giả: Yuval Noah Harari | Số trang: 512 | Ngôn ngữ: Tiếng Việt | Bìa: Cứng | NXB: Trẻ'
  },
  {
    id: 16,
    name: 'Sách - Tôi Tài Giảo Bạn Cũng Thế',
    price: 150000,
    image: 'https://via.placeholder.com/500x500/764ba2/ffffff?text=Sach+Toi+Tai+Gioi',
    category: 'Sách',
    description: 'Cuốn sách truyền cảm hứng về phương pháp học tập hiệu quả và phát triển tư duy tích cực.',
    details: 'Tác giả: Adam Khoo | Số trang: 288 | Ngôn ngữ: Tiếng Việt | Bìa: Mềm | NXB: Trẻ'
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

