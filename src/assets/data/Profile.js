/* eslint-disable prettier/prettier */

import {
  faAward,
  faBookmark,
  faCartArrowDown,
  faCogs,
  faEye,
  faHeart,
  faList,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const dataFirst = [
  {
    icon: faList,
    name: 'Quản lý đơn hàng',
  },
  {
    icon: faCartArrowDown,
    name: 'Sản phẩm đã mua',
  },
  {
    icon: faEye,
    name: 'Sản phẩm đã xem',
  },
  {
    icon: faHeart,
    name: 'Sản phẩm yêu thích',
  },
  {
    icon: faBookmark,
    name: 'Sản phẩm mua sau',
  },
  {
    icon: faStar,
    name: 'Sản phẩm đánh giá',
  },
];

const dataSecond = [
  {
    icon: faAward,
    name: 'Ưu đãi cho chủ thẻ ngân hàng',
  },
  {
    icon: faCogs,
    name: 'Cài đặt',
  },
];

export {dataFirst, dataSecond};
