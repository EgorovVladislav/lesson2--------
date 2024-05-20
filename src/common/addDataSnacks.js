import img1 from "../assets/snacks1.png";
import img2 from "../assets/snacks2.png";
import img3 from "../assets/snacks3.png";

const arrImg = [img1, img2, img3];

export default function addSnacksData(data) {
  return data.map((item, index) => {
    item.images = arrImg[index];
    return item;
  });
}
