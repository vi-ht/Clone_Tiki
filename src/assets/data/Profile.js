
import icon1 from '../../assets/image/1.jpg';
import icon2 from '../../assets/image/2.jpg';
import icon3 from '../../assets/image/3.jpg';
import icon4 from '../../assets/image/4.jpg';
import icon5 from '../../assets/image/5.jpg';
import icon6 from '../../assets/image/6.jpg';
import icon7 from '../../assets/image/7.jpg';
import icon8 from '../../assets/image/8.jpg';
import icon9 from '../../assets/image/9.jpg';
import icon10 from '../../assets/image/10.jpg';
import icon11 from '../../assets/image/11.jpg';
import icon12 from '../../assets/image/12.jpg';
import icon13 from '../../assets/image/santhuong.jpg';
import icon14 from '../../assets/image/14.jpg';
import icon15 from '../../assets/image/15.jpg';
import icon16 from '../../assets/image/16.jpg';
import icon17 from '../../assets/image/17.jpg';

const dataFirst = [
  {
    icon: `${icon13}`,
    name: 'Săn thưởng',
  },
  {
    icon: `${icon14}`,
    name: 'Đánh giá sản phẩm',
  },
  {
    icon: `${icon15}`,
    name: 'Sản phẩm đã mua',
  },
];

const dataSecond = [
  {
    icon: `${icon16}`,
    name: 'Ưu đãi cho chủ thẻ ngân hàng',
  },
  {
    icon: `${icon17}`,
    name: 'Bán hàng cùng Tiki',
  },
];

const dataDonHang = [{
  nameLeft: "Đơn hàng của tôi",
  nameRight: "XEM LỊCH SỬ",
  iconList:
    [
      {
        iconImg:`${icon1}`,
        name: 'Chờ thanh toán',
      },
      {
        iconImg: `${icon2}`,
        name: 'Đang xử lý',
      },
      {
        iconImg: `${icon3}`,
        name: 'Đang vận chuyển',
      },
      {
        iconImg: `${icon4}`,
        name: 'Chơ đánh giấ',
      },
    ]
}];

const dataQuanTam = [
{
  nameLeft: "Quan tâm",
  nameRight: "",
  iconList:
    [
      {
        iconImg:`${icon5}`,
        name: 'Đã xem',
      },
      {
        iconImg: `${icon6}`,
        name: 'Yêu thích',
      },
      {
        iconImg: `${icon7}`,
        name: 'Mua sau',
      },
      {
        iconImg: `${icon8}`,
        name: 'Theo dõi',
      },
    ]
}];

const dataTienIch = [
  {
    nameLeft: "Tiện ích khác",
    nameRight: "",
    iconList:
      [
        {
          iconImg:`${icon9}`,
          name: 'Bookcare',
        },
        {
          iconImg: `${icon10}`,
          name: 'Hỗ trợ',
        },
        {
          iconImg: `${icon11}`,
          name: 'Sổ địa chỉ',
        },
        {
          iconImg: `${icon12}`,
          name: 'Thông tin thanh toán',
        },
      ]
  }];

  
export { dataFirst, dataSecond, dataDonHang, dataQuanTam, dataTienIch };
