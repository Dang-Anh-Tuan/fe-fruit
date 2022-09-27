export default {
  LIST_FRUIT: [
    {
      id: 1,
      name: "Táo",
      img: "https://photo-cms-tpo.zadn.vn/w890/Uploaded/2022/rkznae/2019_10_19/anh_1_tao_1_15228175859241411126029_BXIR.jpg",
    },
    {
      id: 2,
      name: "Vải",
      img: "https://www.btaskee.com/wp-content/uploads/2021/08/vo%CC%89-va%CC%89i-thie%CC%82%CC%80u-ngon-ngo%CC%A3t-kho%CC%82ng-bi%CC%A3-sa%CC%82u-da%CC%82%CC%80u.jpg",
    },
    {
      id: 3,
      name: "Mít",
      img: "https://suckhoedoisong.qltns.mediacdn.vn/Images/bichvan/2017/01/13/mit-phong-ung-thu.jpg",
    },
    {
      id: 4,
      name: "Chuối",
      img: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/chuoi1-16341869574602070184903.jpg",
    },
    {
      id: 5,
      name: "Hồng xiêm",
      img: "https://media.vienyhocungdung.vn/Upload/38/2021/Thang_6/d277ca38-ce67-4196-88c8-14e576f11397.jpg",
    },
    {
      id: 6,
      name: "Xoài",
      img: "https://www.thebabytalks.com/wp-content/uploads/2021/03/tra%CC%81i-xoa%CC%80i-cho-be%CC%81-.jpg",
    },
    {
      id: 7,
      name: "Nhãn",
      img: "https://bizweb.dktcdn.net/100/324/966/products/nhanxuongcomvang-c1876ecb-51c1-4db5-942e-e84e6d998158.jpg?v=1624982757580",
    },
    {
      id: 8,
      name: "Mận",
      img: "https://salt.tikicdn.com/cache/w1200/ts/product/9f/e7/e2/6e19fb912adda3c5607277a81a347532.jpg",
    },
    {
      id: 9,
      name: "Chanh leo",
      img: "https://thucphamdongxanh.com/wp-content/uploads/2019/09/chanh-d%C3%A2y-t%C3%A2y-nguy%C3%AAn.jpg",
    },
    {
      id: 10,
      name: "Chôm chôm",
      img: "https://agriviet.org/wp-content/uploads/2021/03/Diem-ten-5-loai-phan-bon-duong-qua-chom-chom-day-cui-doc-hat.png",
    },
  ],
  ATTRIBUTE_FIELDS: [
    {
      name: "Chiều dài (cm)",
      type: "number",
      field: "long",
    },
    {
      name: "Chiều rộng (cm)",
      type: "number",
      field: "width",
    },
    {
      name: "Cân nặng (kg)",
      type: "number",
      field: "weight",
    },
    {
      name: "Màu sắc",
      type: "select",
      field: "color",
    },
    {
      name: "Mùi hương",
      type: "select",
      field: "smell",
    },
  ],
  SIZE_FRUITS: [
    {
      id: 1,
      avgLongMin: 5,
      avgLongMax: 6,
      avgWidthMin: 5,
      avgWidthMax: 6,
    },
    {
      id: 2,
      avgLongMin: 2,
      avgLongMax: 3,
      avgWidthMin: 2,
      avgWidthMax: 3,
    },
    {
      id: 3,
      avgLongMin: 30,
      avgLongMax: 45,
      avgWidthMin: 20,
      avgWidthMax: 30,
    },
    {
      id: 4,
      avgLongMin: 20,
      avgLongMax: 25,
      avgWidthMin: 3,
      avgWidthMax: 5,
    },
    {
      id: 5,
      avgLongMin: 4,
      avgLongMax: 8,
      avgWidthMin: 4,
      avgWidthMax: 8,
    },
    {
      id: 6,
      avgLongMin: 8,
      avgLongMax: 15,
      avgWidthMin: 5,
      avgWidthMax: 8,
    },
    {
      id: 7,
      avgLongMin: 2,
      avgLongMax: 2.5,
      avgWidthMin: 2,
      avgWidthMax: 2.5,
    },
    {
      id: 8,
      avgLongMin: 1.5,
      avgLongMax: 2.2,
      avgWidthMin: 1.5,
      avgWidthMax: 2.2,
    },
    {
      id: 9,
      avgLongMin: 3,
      avgLongMax: 5,
      avgWidthMin: 3,
      avgWidthMax: 5,
    },
    {
      id: 10,
      avgLongMin: 2.2,
      avgLongMax: 3.3,
      avgWidthMin: 2.2,
      avgWidthMax: 3.3,
    },
  ],
  TYPE_WEIGHT: [
    {
      id: 1,
      avgWeightMin: 0.2,
      avgWeightMax: 0.3,
    },
    {
      id: 2,
      avgWeightMin: 0.01,
      avgWeightMax: 0.015,
    },
    {
      id: 3,
      avgWeightMin: 2,
      avgWeightMax: 3,
    },
    {
      id: 4,
      avgWeightMin: 0.05,
      avgWeightMax: 0.1,
    },
    {
      id: 5,
      avgWeightMin: 0.05,
      avgWeightMax: 0.1,
    },
    {
      id: 6,
      avgWeightMin: 0.1,
      avgWeightMax: 0.2,
    },
    {
      id: 7,
      avgWeightMin: 0.015,
      avgWeightMax: 0.02,
    },
    {
      id: 8,
      avgWeightMin: 0.025,
      avgWeightMax: 0.035,
    },
    {
      id: 9,
      avgWeightMin: 0.04,
      avgWeightMax: 0.07,
    },
    {
      id: 10,
      avgWeightMin: 0.035,
      avgWeightMax: 0.075,
    },
  ],
  LIST_SIZE: [
    {
      id: 1,
      content: "nho",
    },
    {
      id: 2,
      content: "TB",
    },
    {
      id: 3,
      content: "lon",
    },
  ],
  LIST_TYPE_WEIGHT: [
    {
      id: 1,
      content: "nhe",
    },
    {
      id: 2,
      content: "TB",
    },
    {
      id: 3,
      content: "nang",
    },
  ],
  FIELDS_INPUT_CASE: [
    {
      name: "Quả",
      type: "select",
      field: "fruit",
    },
    {
      name: "Kích thước",
      type: "select",
      field: "size",
    },
    {
      name: "Cân nặng",
      type: "select",
      field: "weight",
    },
    {
      name: "Màu sắc",
      type: "select",
      field: "color",
    },
    {
      name: "Mùi hương",
      type: "select",
      field: "odor",
    },
    {
      name: "Trạng thái",
      type: "select",
      field: "quality",
    },
  ],
};
