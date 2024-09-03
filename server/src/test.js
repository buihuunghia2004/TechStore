// const slugify = (val) => {
//   if (!val) return ''
//   return String(val)
//     .normalize('NFKD') // split accented characters into their base characters and diacritical marks
//     .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
//     .trim() // trim leading or trailing whitespace
//     .toLowerCase() // convert to lowercase
//     .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
//     .replace(/\s+/g, '-') // replace spaces with hyphens
//     .replace(/-+/g, '-') // remove consecutive hyphens
// }

const slugify = (val) => {
  if (!val) return '';
  return String(val)
    .normalize('NFKD') // phân tách các ký tự có dấu thành ký tự gốc và dấu
    .replace(/[\u0300-\u036f]/g, '') // loại bỏ dấu
    .trim() // loại bỏ khoảng trắng ở đầu và cuối chuỗi
    .toLowerCase() // chuyển chuỗi thành chữ thường
    .replace(/đ/g, 'd') // thay thế "đ" thành "d"
    .replace(/Đ/g, 'd')
    .replace(/[^a-z0-9 -]/g, '') // loại bỏ các ký tự không phải là chữ cái, số, "đ", và khoảng trắng
    .replace(/\s+/g, '-') // thay thế khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, '-') // loại bỏ dấu gạch ngang liên tiếp
}

const s = 'Đồng hồ'

console.log(slugify(s));
