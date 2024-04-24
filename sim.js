// function randomNumbers(arr, menh) {
//     const result = [];
//     for (const item of arr) {
//       let min, max;
//       if (menh === 'kim') {
//         if (item === 'lộc') {
//           min = 1;
//           max = 6;
//         } else if (item === 'bạn') {
//           min = 4;
//           max = 9;
//         } else if (item === 'vượng') {
//           min = 0;
//           max = 5;
//         }
//       } else if (menh === 'mộc') {
//         if (item === 'lộc') {
//           min = 2;
//           max = 7;
//         } else if (item === 'bạn') {
//           min = 3;
//           max = 8;
//         } else if (item === 'vượng') {
//           min = 1;
//           max = 6;
//         }
//       } else if (menh === 'thủy') {
//         if (item === 'lộc') {
//           min = 3;
//           max = 8;
//         } else if (item === 'bạn') {
//           min = 1;
//           max = 6;
//         } else if (item === 'vượng') {
//           min = 4;
//           max = 9;
//         }
//       } else if (menh === 'hỏa') {
//         if (item === 'lộc') {
//           min = 0;
//           max = 5;
//         } else if (item === 'bạn') {
//           min = 2;
//           max = 7;
//         } else if (item === 'vượng') {
//           min = 3;
//           max = 8;
//         }
//       } else if (menh === 'thổ') {
//         if (item === 'lộc') {
//           min = 4;
//           max = 9;
//         } else if (item === 'bạn') {
//           min = 0;
//           max = 5;
//         } else if (item === 'vượng') {
//           min = 2;
//           max = 7;
//         }
//       }
  
//       const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//       result.push(randomNumber);
//     }
  
//     return result;
//   }
  
  function randomNumbers(arr, menh) {
    const result = [];
    for (const item of arr) {
      let min, max;
  
      if (menh === 'kim') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 1 : 6;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 4 : 9;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 5 : 5;
          result.push(randomNumber);
        }
      } else if (menh === 'mộc') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 2 : 7;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 3 : 8;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 1 : 6;
          result.push(randomNumber);
        }
      } else if (menh === 'thủy') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 3 : 8;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 1 : 6;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 4 : 9;
          result.push(randomNumber);
        }
      } else if (menh === 'hỏa') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 5 : 5;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 2 : 7;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 3 : 8;
          result.push(randomNumber);
        }
      } else if (menh === 'thổ') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 4 : 9;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 5 : 5;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 2 : 7;
          result.push(randomNumber);
        }
      }
    }
  
    return result;
  }
  
 
  
  


  // dữ liệu đữa vào 
  var data = [
    {
        id: 1,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'bạn - bạn',
        array:['lộc','lộc','lộc','lộc','bạn','bạn']
    },    {
        id: 2,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'vượng - vượng',
        array:['lộc','lộc','lộc','lộc','vượng','vượng']
    },    {
        id: 3,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'vượng - bạn',
        array:['lộc','lộc','lộc','lộc','vượng','bạn']
    },    {
        id: 4,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'bạn - vượng',
        array:['lộc','lộc','lộc','lộc','bạn','vượng']
    },
    {
        id: 5,
         td1: 'lộc - lộc',
         td2: 'lộc - bạn',
         td3: 'vượng - bạn',
         array:['lộc','lộc','lộc','bạn','vượng','bạn']
    },
    {
        id: 6,
         td1: 'lộc - lộc',
         td2: 'lộc - bạn',
         td3: 'bạn - bạn',
         array:['lộc','lộc','lộc','bạn','bạn','bạn']
    },
    {
        id: 7,
         td1: 'lộc - bạn',
         td2: 'lộc - bạn',
         td3: 'vượng - bạn',
         array:['lộc','bạn','lộc','bạn','vượng','bạn']
    },{
        id: 8,
         td1: 'lộc - bạn',
         td2: 'lộc - bạn',
         td3: 'bạn - bạn',
         array:['lộc','bạn','lộc','bạn','bạn','bạn']
    },{
        id: 9,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['vượng','bạn','lộc','lộc','lộc','bạn']
    },{
        id: 10,
         td1: 'bạn - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['bạn','bạn','lộc','lộc','lộc','bạn']
    },{
        id: 11,
         td1: 'vượng - bạn',
         td2: 'lộc - bạn',
         td3: 'lộc - bạn',
         array:['vượng','bạn','lộc','bạn','lộc','bạn']
    },{
        id: 12,
         td1: 'bạn - bạn',
         td2: 'lộc - bạn',
         td3: 'lộc - bạn',
         array:['bạn','bạn','lộc','bạn','lộc','bạn']
    },{
        id: 13,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - bạn',
         array:['vượng','bạn','vượng','bạn','lộc','bạn']
    },{
        id: 14,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - bạn',
         array:['bạn','bạn','bạn','bạn','lộc','bạn']
    },{
        id: 15,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - bạn',
         array:['vượng','bạn','vượng','bạn','lộc','bạn']
    },{
        id: 16,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - bạn',
         array:['bạn','bạn','bạn','bạn','lộc','bạn']
    },{
        id: 17,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - lộc',
         array:['vượng','bạn','vượng','bạn','lộc','lộc']
    },{
        id: 18,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - lộc',
         array:['bạn','bạn','bạn','bạn','lộc','lộc']
    },{
        id: 19,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - lộc',
         array:['vượng','bạn','vượng','bạn','lộc','lộc']
    },{
        id: 20,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - lộc',
         array:['bạn','bạn','bạn','bạn','lộc','lộc']
    },{
        id: 21,
         td1: 'lộc - lộc',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['lộc','lộc','bạn','lộc','vượng','bạn']
    },{
        id: 22,
         td1: 'lộc - lộc',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['lộc','lộc','bạn','lộc','bạn','bạn']
    },{
        id: 23,
         td1: 'lộc - bạn',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['lộc','bạn','bạn','lộc','vượng','bạn']
    },{
        id: 24,
         td1: 'lộc - bạn',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['lộc','bạn','bạn','lộc','bạn','bạn']
    },{
        id: 25,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['bạn','lộc','bạn','lộc','vượng','bạn']
    },{
        id: 26,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['bạn','lộc','bạn','lộc','bạn','bạn']
    },{
        id: 27,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['bạn','lộc','bạn','lộc','vượng','bạn']
    },{
        id: 28,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['bạn','lộc','bạn','lộc','bạn','bạn']
    },{
        id: 29,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'bạn - lộc',
         array:['vượng','bạn','lộc','lộc','bạn','lộc']
    },{
        id: 30,
         td1: 'bạn - bạn',
         td2: 'lộc - lộc',
         td3: 'bạn - lộc',
         array:['bạn','bạn','lộc','lộc','bạn','lộc']
    },{
        id: 31,
         td1: 'vượng - bạn',
         td2: 'lộc - bạn',
         td3: 'bạn - lộc',
         array:['vương','bạn','lộc','bạn','bạn','lộc']
    },{
        id: 32,
         td1: 'bạn - bạn',
         td2: 'lộc- bạn',
         td3: 'bạn - lộc',
         array:['bạn','bạn','lộc','bạn','bạn','lộc']
    },{
        id: 33,
         td1: 'lộc - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['lộc','bạn','lộc','lộc','lộc','bạn']
    },{
        id: 34,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'bạn - lộc',
         array:['bạn','bạn','bạn','bạn','bạn','lộc']
    },{
        id: 35,
         td1: 'vượng - bạn',
         td2: 'vượng- bạn',
         td3: 'bạn - lộc',
         array:['vượng','bạn','vượng','bạn','bạn','lộc']
    },
    {
        id: 36,
         td1: 'bạn - lộc',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['bạn','lộc','lộc','lộc','lộc','bạn']
    },
    {
        id: 37,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['vượng','bạn','lộc','lộc','lộc','bạn']
    },
    {
        id: 38,
         td1: 'bạn - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['bạn','vượng','lộc','lộc','lộc','bạn']
    },
    {
        id: 39,
         td1: 'vượng - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['vượng','vượng','lộc','lộc','lộc','bạn']
    },
    {
        id: 40,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['bạn','lộc','bạn','lộc','lộc','lộc']
    },
    {
        id: 41,
         td1: 'lộc - bạn',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['lộc','bạn','bạn','lộc','lộc','lộc']
    },
    {
        id: 42,
         td1: 'bạn - bạn',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['bạn','bạn','bạn','lộc','lộc','lộc']
    },
    {
        id: 43,
         td1: 'vượng - bạn',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['vượng','bạn','bạn','lộc','lộc','lộc']
    },
    {
        id: 44,
         td1: 'bạn - vượng',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['bạn','vượng','bạn','lộc','lộc','lộc']
    },
    {
        id: 45,
         td1: 'vượng - vượng',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['vượng','vượng','bạn','lộc','lộc','lộc']
    },
    {
        id: 46,
         td1: 'bạn - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['bạn','bạn','lộc','lộc','lộc','lộc']
    },
    {
        id: 47,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['vượng','bạn','lộc','lộc','lộc','lộc']
    },
    {
        id: 48,
         td1: 'bạn - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['bạn','vượng','lộc','lộc','lộc','lộc']
    },
    {
        id: 49,
         td1: 'vượng - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['vượng','vượng','lộc','lộc','lộc','lộc']
    }
    
  ];
  var tableBody = document.getElementById("customers");
        var previousButton = null;

        data.forEach(function(item, index) {
            var row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.td1}</td>
                <td>${item.td2}</td>
                <td>${item.td3}</td>
                <td><button class="change-button" data-index="${index}">Chọn</button></td>
            `;
            tableBody.appendChild(row);
        });
        var menhh = '';
        var output = document.getElementById("output");

        var changeButtons = document.querySelectorAll(".change-button");

        changeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                var index = button.getAttribute("data-index"); // Lấy giá trị index từ thuộc tính data-index
                if (previousButton) {
                    previousButton.style.backgroundColor = "";
                }
                button.style.backgroundColor = "green";
                previousButton = button;

                // Lấy mảng tương ứng với hàng đã nhấp
                var selectedArray = data[index].array;
                // Hiển thị mảng trong phần tử "output"
                output.textContent = selectedArray;
                
            });
        });
        var output_menh = document.getElementById("output-menh");
        var buttons = document.querySelectorAll(".menh button");
        var previousButtons = null;

        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                // Trả lại màu của nút trước đó về ban đầu
                if (previousButtons) {
                    previousButtons.style.backgroundColor = previousButtons.originalColor;
                }

                // Đổi màu của nút mới
                button.originalColor = button.style.backgroundColor;
                button.style.backgroundColor = "green"; // Màu mới

                // Lưu lại nút mới như nút trước đó
                previousButtons = button;

                // Lấy nội dung của nút
                var buttonText = button.textContent;
                output_menh.textContent = buttonText;
            });
        });
        let resultArray = [];
        let resultNumber;
        let result;
        var searchButton = document.getElementById("searchButton");

        searchButton.addEventListener("click", function() {
            // Đổi màu của nút "Tìm Sim"
             var menhip = document.getElementById("output-menh");
             var arrayip = document.getElementById("output");
             var ip = arrayip.textContent;
             const menh = menhip.textContent;
             const arr = ip.split(',');
            const sodep = [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 20, 21, 23, 24, 25, 27, 28, 30, 31, 32, 36, 38, 40, 42, 43, 46, 47, 51, 56, 62, 64, 66, 67, 72, 76, 78, 80];
 
  
  do {
    resultArray = randomNumbers(arr, menh);
    const numberString = resultArray.join(''); // Kết hợp mảng thành chuỗi
    resultNumber = parseInt(numberString, 10);
    console.log(`số điện thoại : ${resultNumber}`);



    
    // const numberArrr = (resultNumber / 80);
    // console.log(`số bị chia : ${numberArrr}`);
    // const decimalPart = numberArrr % 1;
    //  console.log(`phần chứa thập phân ${decimalPart}`);
    // result = decimalPart * 80;
    // console.log(`kết quả cuối cùng : ${result}`);

//cach 2
const numberArrr = resultNumber / 80;
// console.log(`Số bị chia: ${numberArrr}`);

// Chuyển đổi số thành chuỗi
const numberStringWithDot = numberArrr.toString();

// Tách phần thập phân và phần nguyên
const [integerPart, decimalPart] = numberStringWithDot.split('.');

console.log(`Phần nguyên: ${integerPart}`);
console.log(`Phần thập phân: ${decimalPart || 0}`);

// Làm tròn phần thập phân và tính kết quả cuối cùng
 result = Math.round(parseFloat(`0.${decimalPart || 0}`) * 80);

console.log(`Kết quả cuối cùng: ${result}`);



// Làm tròn kết quả số thập phân ( điện thoại 1)
// const numberArrr = resultNumber / 80;
// const roundedNumberArrr = Math.round(numberArrr);

// const hh = numberArrr - roundedNumberArrr;
// const decimalPart = Math.round(hh * 100000) / 100000; // Làm tròn đến 5 chữ số sau dấu thập phân

// console.log(`Phần chứa thập phân: ${decimalPart}`);

// result = decimalPart * 80;
// console.log(`Kết quả cuối cùng: ${result}`);




    if (result % 2 !== 0) {
      result = Math.ceil(result);
    }
  } while (!sodep.includes(result));
  
  
  console.log(result);
  console.log("??? :"+ resultArray);
  var kqc= resultArray.join("");
  console.log("kqc "+kqc);
  hienThiDoiTuongTheoId(result,kqc); 
  hirenThiMenh(kqc,QDich);
 }); 
 
const yngia = [
     {
         id: 1,
         gnghia: "Đại triển đồng hồ khả được thành công",
         mucd: "Cát"
     },
     {
         id: 3,
         gnghia: "ngày ngày tiến tới, vạn sự thuận toàn",
         mucd: "Đại cát"
     },
      {
         id: 5,
         gnghia: "Làm ăn phát đạt, danh lợi đều có",
         mucd: "Đại cát"
     },
      {
         id: 6,
         gnghia: "Trời cho số phận, có thể thành công",
         mucd: "Cát"
     },
      {
         id: 7,
         gnghia: "Ôn hòa êm dịu, nhất định thành công",
         mucd: "Cát"
     },
      {
         id: 8,
         gnghia: "Qua đoạn gian nan, có ngày thành công",
         mucd: "Cát"
     },
      {
         id: 11,
         gnghia: "Vững đi từng bước, được người trọng vọng",
         mucd: "Cát"
     },
      {
         id: 13,
         gnghia: "Trời cho cát vận, được người kính trọng",
         mucd: "Đại cát"
     },
      {
         id: 15,
         gnghia: "Đại sự thành tựu, nhất định hưng vượng",
         mucd: "Cát"
     },
      {
         id: 16,
         gnghia: "Thành tựu to lớn, tên tuổi lừng danh",
         mucd: "Đại cát"
     }, {
         id: 17,
         gnghia: "Quý nhân trợ giúp, sẽ đạt thành công",
         mucd: "Cát"
     }, {
         id: 18,
         gnghia: "Thuận lợi hưng thịnh, trăm việc trôi chảy",
         mucd: "Đại cát"
     }, {
         id: 21,
         gnghia: "Chuyên tâm kinh doanh, hay dùng trí tuệ",
         mucd: "Cát"
     }, {
         id: 23,
         gnghia: "Tên tuổi bốn phương sẽ thành đại nghiệp",
         mucd: "Đại cát"
     }, {
         id: 24,
         gnghia: "Phải dựa tự lập, sẽ thành đại nghiệp",
         mucd: "Đại cát"
     }, {
         id: 25,
         gnghia: "Thiên thời địa lợi, vì được nhân cách",
         mucd: "Đại cát"
     }, {
         id: 27,
         gnghia: "Lúc thắng lúc thua, giữ được thành công",
         mucd: "Cát"
     }, {
         id: 28,
         gnghia: "Tiến mãi không lùi, trí tuệ được dùng",
         mucd: "Đại cát"
     }, {
         id: 30,
         gnghia: "Danh lợi được mùa, đại sự thành công",
         mucd: "Đại cát"
     }, {
         id: 31,
         gnghia: "Con rồng trong nước, thành công sẽ đến",
         mucd: "Đại cát"
     }, {
         id: 32,
         gnghia: "Dùng chí lâu dài, sẽ được hưng thịnh",
         mucd: "Cát"
     }, {
         id: 36,
         gnghia: "Tránh được điềm ác, thuận buồm xuôi gió",
         mucd: "Cát"
     }, {
         id: 38,
         gnghia: "Đường rộng thênh thang, nhìn tới tương lai",
         mucd: "Đại cát"
     }, {
         id: 40,
         gnghia: "Thiên ý cát vận, tiền đồ sáng sủa",
         mucd: "Đại cát"
     }, {
         id: 42,
         gnghia: "Nhẫn nhịn chịu đựng, xấu cũng thành tốt",
         mucd: "Cát"
     }, {
         id: 43,
         gnghia: "Cây xanh trổ lá, đột nhiên thành công",
         mucd: "Cát"
     }, {
         id: 46,
         gnghia: "Quý nhân trợ giúp, thành công đại sự",
         mucd: "Đại cát"
     }, {
         id: 47,
         gnghia: "Danh lợi đều có, thành công đại sự",
         mucd: "Đại cát"
     }, {
         id: 51,
         gnghia: "Trời quang mây tạnh, đạt được thành công",
         mucd: "Cát"
     }, {
         id: 56,
         gnghia: "Nỗ lực phấn đấu, phận tốt quay về",
         mucd: "Cát"
     }, {
         id: 62,
         gnghia: "Biết hướng nỗ lực, con đường phồn vinh",
         mucd: "Cát"
     }, {
         id: 64,
         gnghia: "Cát vận tự đến, có được thành công",
         mucd: "Cát"
     }, {
         id: 66,
         gnghia: "Mọi việc như ý, phú quý tự đến",
         mucd: "Đại cát"
     }, {
         id: 67,
         gnghia: "Nắm vững thời cơ, thành công sẽ đến",
         mucd: "Cát"
     },{
         id: 72,
         gnghia: "An lạc tự đến, tự nhiên cát tường",
         mucd: "Cát"
     },{
         id: 76,
         gnghia: "Khổ trước sướng sau không bị thất bại",
         mucd: "Cát"
     },{
         id: 78,
         gnghia: "Tiền đồ tươi sáng, tràn đầy hy vọng",
         mucd: "Đại cát"
     },{
         id: 80,
         gnghia: "Số phận cao nhất, sẽ được thành công",
         mucd: "Đại cát"
     }
];
var List64 = [
    { id: 1, nghia: "Đại triển đồng hồ khả được thành công", mucdo: "Cát" },
    { id: 2, nghia: "thăng trầm không số, về già vô công", mucdo: "Bình" },
    { id: 3, nghia: "ngày ngày tiến tới, vạn sự thuận toàn", mucdo: "Đại cát" },
    { id: 4, nghia: "tiền đồ gai góc, đau khổ đeo đuổi", mucdo: "Hung" },
    { id: 5, nghia: "Làm ăn phát đạt, danh lợi đều có", mucdo: "Đại cát" },
    { id: 6, nghia: "Trời cho số phận, có thể thành công", mucdo: "Cát" },
    { id: 7, nghia: "Ôn hòa êm dịu, nhất định thành công", mucdo: "Cát" },
    { id: 8, nghia: "Qua đoạn gian nan, có ngày thành công", mucdo: "Cát" },
    { id: 9, nghia: "Tự làm vô sức, thất bại khó lường", mucdo: "Hung" },
    { id: 10, nghia: "Tâm sức làm không, không được bến bờ", mucdo: "Hung" },
    { id: 11, nghia: "Vững đi từng bước, được người trọng vọng", mucdo: "Cát" },
    { id: 12, nghia: "Gầy gò yếu đuối, mọi sự khó thành", mucdo: "Hung" },
    { id: 13, nghia: "Trời cho cát vận, được người kính trọng", mucdo: "Đại cát" },
    { id: 14, nghia: "Nữa được nữa bại, dựa vào nghị lực", mucdo: "Bình" },
    { id: 15, nghia: "Đại sự thành tựu, nhất định hưng vượng", mucdo: "Cát" },
    { id: 16, nghia: "Thành tựu to lớn, tên tuổi lừng danh", mucdo: "Đại cát" },
    { id: 17, nghia: "Quý nhân trợ giúp, sẽ đạt thành công", mucdo: "Cát" },
    { id: 18, nghia: "Thuận lợi hưng thịnh, trăm việc trôi chảy", mucdo: "Đại cát" },
    { id: 19, nghia: "Nội ngoại bất hòa, khó khăn muôn phần", mucdo: "Hung" },
    { id: 20, nghia: "Vượt mọi gian nan, lo lắng nghĩ hoài", mucdo: "Đại hung" },
    { id: 21, nghia: "Chuyên tâm kinh doanh, hay dùng trí tuệ", mucdo: "Cát" },
    { id: 22, nghia: "Có tài không làm, việc không gặp may", mucdo: "Hung" },
    { id: 23, nghia: "Tên tuổi bốn phương sẽ thành đại nghiệp", mucdo: "Đại cát" },
    { id: 24, nghia: "Phải dựa tự lập, sẽ thành đại nghiệp", mucdo: "Đại cát" },
    { id: 25, nghia: "Thiên thời địa lợi, vì được nhân cách", mucdo: "Đại cát" },
    { id: 26, nghia: "Bão táp phong ba, qua mọi nguy hiểm", mucdo: "Hung" },
    { id: 27, nghia: "Lúc thắng lúc thua, giữ được thành công", mucdo: "Cát" },
    { id: 28, nghia: "Tiến mãi không lùi, trí tuệ được dùng", mucdo: "Đại cát" },
    { id: 29, nghia: "Cát hung chia đôi, được chia mỗi nữa", mucdo: "Hung" },
    { id: 30, nghia: "Danh lợi được mùa, đại sự thành công", mucdo: "Đại cát" },
    { id: 31, nghia: "Con rồng trong nước, thành công sẽ đến", mucdo: "Đại cát" },
    { id: 32, nghia: "Dùng chí lâu dài, sẽ được hưng thịnh", mucdo: "Cát" },
    { id: 33, nghia: "Rủi ro không ngừng, khó có thành công", mucdo: "Hung" },
    { id: 34, nghia: "Số phận trung cát, tiến lùi bảo thủ", mucdo: "Bình" },
    { id: 35, nghia: "Trôi nổi bập bùng, thường hay gặp nạn", mucdo: "Hung" },
    { id: 36, nghia: "Tránh được điềm ác, thuận buồm xuôi gió", mucdo: "Cát" },
    { id: 37, nghia: "Danh thì được tiếng, lợi thì được không", mucdo: "Bình" },
    { id: 38, nghia: "Đường rộng thênh thang, nhìn tới tương lai", mucdo: "Đại cát" },
    { id: 39, nghia: "Lúc thịnh lúc suy, chìm nổi vô định", mucdo: "Bình" },
    { id: 40, nghia: "Thiên ý cát vận, tiền đồ sáng sủa", mucdo: "Đại cát" },
    { id: 41, nghia: "Sự nghiệp chông chênh, hầu như không thành", mucdo: "Hung" },
    { id: 42, nghia: "Nhẫn nhịn chịu đựng, xấu cũng thành tốt", mucdo: "Cát" },
    { id: 43, nghia: "Cây xanh trổ lá, đột nhiên thành công", mucdo: "Cát" },
    { id: 44, nghia: "Ngược với ý mình, tham công lỡ việc", mucdo: "Hung" },
    { id: 45, nghia: "Quanh co khúc khủy, khó khăn kéo dài", mucdo: "Hung" },
    { id: 46, nghia: "Quý nhân trợ giúp, thành công đại sự", mucdo: "Đại cát" },
    { id: 47, nghia: "Danh lợi đều có, thành công đại sự", mucdo: "Đại cát" },
    { id: 48, nghia: "Gặp cát được cát, gặp hung được hung", mucdo: "Bình" },
    { id: 49, nghia: "Hung cát cùng có, một thành một bại", mucdo: "Bình" },
    { id: 50, nghia: "Một thịnh một suy, bập bềnh sóng gió", mucdo: "Bình" },
    { id: 51, nghia: "Trời quang mây tạnh, đạt được thành công", mucdo: "Cát" },
    { id: 52, nghia: "Xương thịnh nữa số, cát trước hung sau", mucdo: "Hung" },
    { id: 53, nghia: "Nỗ lực hết mình, thành công ít ỏi", mucdo: "Bình" },
    { id: 54, nghia: "Bề ngoài tươi sáng, án họa sẽ tới", mucdo: "Hung" },
    { id: 55, nghia: "Ngược lại ý mình khó được thành công", mucdo: "Đại hung" },
    { id: 56, nghia: "Nỗ lực phấn đấu, phận tốt quay về", mucdo: "Cát" },
    { id: 57, nghia: "Bấp bênh nhiều chuyện, hung trước cát sau", mucdo: "Bình" },
    { id: 58, nghia: "Gặp mọi do dự, khó có thành công", mucdo: "Hung" },
    { id: 59, nghia: "Mơ mơ hồ hồ, khó định phương hướng", mucdo: "Bình" },
    { id: 60, nghia: "Mây che nữa trăng, dấu hiệu phong ba", mucdo: "Hung" },
    { id: 61, nghia: "Lo nghĩ nhiều điều, mọi việc không thành", mucdo: "Hung" },
    { id: 62, nghia: "Biết hướng nỗ lực, con đường phồn vinh", mucdo: "Cát" },
    { id: 63, nghia: "Mười việc như không, mất công mất sức", mucdo: "Hung" },
    { id: 64, nghia: "Cát vận tự đến, có được thành công", mucdo: "Cát" },
    { id: 65, nghia: "Nội ngoại bất hòa, thiếu tốn tín nhiệm", mucdo: "Bình" },
    { id: 66, nghia: "Mọi việc như ý, phú quý tự đến", mucdo: "Đại cát" },
    { id: 67, nghia: "Nắm vững thời cơ, thành công sẽ đến", mucdo: "Cát" },
    { id: 68, nghia: "Lo trước nghĩ sau, thường hay gặp nạn", mucdo: "Hung" },
    { id: 69, nghia: "Bấp bênh kinh doanh, khó tránh vất vả", mucdo: "Hung" },
    { id: 70, nghia: "Cát hung đều có, chỉ dựa chí khí", mucdo: "Bình" },
    { id: 71, nghia: "Được rồi lại mất, khó có bình yên", mucdo: "Hung" },
    { id: 72, nghia: "An lạc tự đến, tự nhiên cát tường", mucdo: "Cát" },
    { id: 73, nghia: "Như là vô mưu, khó được thành đạt", mucdo: "Bình" },
    { id: 74, nghia: "Trong lành có hung, tiến không bằng giữ", mucdo: "Bình" },
    { id: 75, nghia: "Nhiều điều đại hung, hiện tượng phá sản", mucdo: "Đại hung" },
    { id: 76, nghia: "Khổ trước sướng sau không bị thất bại", mucdo: "Cát" },
    { id: 77, nghia: "Nữa được nữa mất, sang mà không thực", mucdo: "Bình" },
    { id: 78, nghia: "Tiền đồ tươi sáng, tràn đầy hy vọng", mucdo: "Đại cát" },
    { id: 79, nghia: "Được rồi lại mất, lo cũng bằng không", mucdo: "Hung" },
    { id: 80, nghia: "Số phận cao nhất, sẽ được thành công", mucdo: "Đại cát" }
];

function hirenThiMenhCuoi(b1,b2,dt)
{
    const [result4, result5] = splitArray(b1);
    const [result1, result2, result3] = splitArray(b2);
    const tienvanTable = document.querySelector('#customerse-bangctbody');
    const trungvanTable = document.querySelector('#customerse-bangc tbody');
    const hauvanTable = document.querySelector('#customerse-bangc tbody');
    const sonienvanTable = document.querySelector('#customerse-bangc tbody');
    tienvanTable.innerHTML="";
    trungvanTable.innerHTML="";
    hauvanTable.innerHTML="";
    sonienvanTable.innerHTML="";
    const tB = {
        tv: null,
        trv: null,
        hv:null,
        snv:null
    };

dt.forEach(function(item) {
    if (result5 == item.Stt) {
        tB.snv = `
           <tr>
               <td>Sơ Niên Vận</td>
               <td></td>
               <td>${item.Tenqd}</td>
               <td>${item.Stt}</td>
               <td>${item.Tthai}</td>
               <td>${item.Kword}</td>
               <td>${item.Nghia}</td>
           </tr>`;
   }
    if (result1 == item.Stt) {
         tB.tv = `
            <tr>
                <td>Tiền Vận</td>
                <td></td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            </tr>`;
    }
   
    if (result2 == item.Stt) {
        tB.trv = `
            <tr>
                <td>Trung Vận</td>
                <td></td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            </tr>`;
    }

    if (result3 == item.Stt) {
        tB.hv = `
            <tr>
                <td>Hậu Vận</td>
                <td></td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            </tr>`;
    }
});
if (tB.snv) {
    const newRowChu = document.createElement("tr");
    newRowChu.innerHTML = tB.snv;
    sonienvanTable.appendChild(newRowChu);
}
if (tB.tv) {
    const newRowChu = document.createElement("tr");
    newRowChu.innerHTML = tB.tv;
    tienvanTable.appendChild(newRowChu);
}
if (tB.trv) {
    const newRowHo = document.createElement("tr");
    newRowHo.innerHTML = tB.trv;
    tienvanTable.appendChild(newRowHo);
}

if (tB.hv) {
    const newRowBien = document.createElement("tr");
    newRowBien.innerHTML = tB.hv;
    tienvanTable.appendChild(newRowBien);
}
}

function hirenThiMenh(arr,dt)
{
    const [result1, result2, result3] = splitArray(arr);
    const tienvanTable = document.querySelector('#customerse-tienvan tbody');
    const trungvanTable = document.querySelector('#customerse-trungvan tbody');
    const hauvanTable = document.querySelector('#customerse-hauvan tbody');
    tienvanTable.innerHTML="";
    trungvanTable.innerHTML="";
    hauvanTable.innerHTML="";
    const tB = {
        tv: null,
        trv: null,
        hv:null
    };
    console.log(result1,result2,result3);
    console.log(tienvanTable,trungvanTable,hauvanTable);
    dt.forEach(function(item) {

        if (result1 == item.Stt) {
            
            tB.tv = `
                <td>Tiền Vận</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
  
            
        }
    
        if (result2 == item.Stt) {
              tB.trv= `
                <td>Trung Vận</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
  
            
        }
    
        if (result3 == item.Stt) {
           tB.hv = `
                 <td>Hậu Vận</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
  
            
        }
      });
      if (tB.tv) {
        const newRowChu = document.createElement("tr");
        newRowChu.innerHTML = tB.tv;
        tienvanTable.appendChild(newRowChu);
    }
    
    if (tB.trv) {
        const newRowHo = document.createElement("tr");
        newRowHo.innerHTML = tB.trv;
        tienvanTable.appendChild(newRowHo);
    }
    
    if (tB.hv) {
        const newRowBien = document.createElement("tr");
        newRowBien.innerHTML = tB.hv;
        tienvanTable.appendChild(newRowBien);
    }
}
function hienThiDoiTuongTheoId(idCanTim,so) {
  const tbody = document.querySelector("#customer tbody");
  tbody.innerHTML = ""; // Xóa nội dung cũ của tbody

  for (let i = 0; i < yngia.length; i++) {
      if (yngia[i].id === idCanTim) {
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
              <td>${so}</td>
              <td>${yngia[i].id}</td>
              <td>${yngia[i].gnghia}</td>
              <td>${yngia[i].mucd}</td>
          `;

          tbody.appendChild(newRow);
      }
  }
}

// Gọi hàm với id cần tìm
// Đổi thành id mà bạn muốn tìm kiếm
const titleElement = document.querySelector(".title");
    const colors = ["#FFFFFF", "#273c75", "#333333", "#0000FF", "#5f27cd"]; // Danh sách màu bạn muốn sử dụng
    let colorIndex = 0;

    setInterval(function() {
      titleElement.style.color = colors[colorIndex]; // Đặt màu mới cho chữ

      colorIndex++; // Chuyển đến màu tiếp theo trong danh sách
      if (colorIndex >= colors.length) {
        colorIndex = 0; // Quay lại màu đầu khi đã đi qua tất cả màu
      }
    }, 100); 

    // 
    const QDich = [
        {
            Tenqd : 'CÀN VI THIÊN',
            Stt : '1/1',
            Tthai: 'ĐẠI CÁT',
            Kword: 'khỏe, chính trực, toại chí',
            Nghia : 'Mọi việc đều diễn ra theo đúng kế hoạch hoặc sự mong đợi, thành công và danh tiếng lẫn vận may đều biến thành hiện thực, tuy nhiên sự quá thoả mãn và kiêu ngạo hay thái độ hống hách sẽ đưa đến những điều không may. Do đó phải biết cẩn trọng, chu đáo và suy nghĩ khi làm mọi việc, tránh kiêu căng tự mãn'
        },
        {
            Tenqd : 'THIÊN TRẠCH LÝ',
            Stt : '1/2',
            Tthai: 'CÁT',
            Kword: 'khó tính, lý lẽ, nghi lễ, khuôn phép, nghi thức, có ý chí chặn đường không có làm sai, chừng mực, lý lẽ, khắc nghiệt, hợp lý, khó tính',
            Nghia: 'Dù có những khó khăn và trở ngại, nhưng với thái độ hòa nhã, mềm mỏng và nhân hậu sẽ an toàn vượt qua được trở ngại và gặp điều tốt lành. Khó khăn và nguy hiểm khắp nơi, nhưng nếu biết kiên nhẫn, khiêm tốn và nhã nhặn để chờ cơ hội, vận may sẽ đến. Đừng có thái độ tự tiện hay xấu xổ. Hãy giữ vững lập trường của mình'
           
        }, {
            Tenqd : 'THIÊN HOẢ ĐỒNG NHÂN',
            Stt : '1/3',
            Tthai: 'CÁT',
            Kword: 'thân thiện, đồng lòng, đồng tâm hiệp lực',
            Nghia: 'An toàn và vững vàng, cát tưởng. Toàn bộ công việc được tiến hành trong sự phối hợp với người khác sẽ thành công. liên mở rộng thêm các mối quan hệ, kết gian thêm nhiều bạn bè. Khi đạt được hòa hợp với người khác, không nên hành động ích kỷ, xem thưởng ý kiến của người khác, hay có thành kiến, nếu không sẽ gây phương hại. Tránh những cuộc tranh cãi hay bất hòa với người khác'
        }, {
            Tenqd : 'THIÊN LÔI VÔ VỌNG',
            Stt : '1/4',
            Tthai: 'HUNG',
            Kword: 'làm bậy, không hy vọng, không có lề lối, không theo quy cũ, chống đối, thất bại, hư hỏng',
            Nghia: 'Đừng mê đắm việc giành lợi thế bản thân hay thỏa mãn các ước muốn hoặc thú vui riêng tư, nếu không sẽ gặp điều không may. Hãy đối đãi với mọi người và xử trí các công việc bằng sự thành thực hết mực. Thuận theo một cách tự nhiên, đồng thời vẫn giữ vững lập trường của mình thì sẽ tốt lành. Hành động cưỡng cầu – tức là, hành động mãnh liệt, thậm chí triệt để'

        }, {
            Tenqd : 'THIÊN PHONG CẤU',
            Stt : '1/5',
            Tthai: 'BÌNH HÒA',
            Kword: 'gặp gỡ bất thình lình, tượng của sự cấu kết',
            Nghia: 'Không nên hành động chỉ vì bị ảnh hưởng. Lực âm đang tăng lên và lực dương đang giảm xuống, vận hội đang thay đổi theo hướng xấu di. Hãy cẩn thận và đề phòng để ngăn chặn sự bắt đầu của vận may đang hồi xuống dốc. Có thể gặp sự không may, ai đó có thể gây hại hoặc vu khống, một phụ nữ có thể gây rắc rối và tổn hại'
        }, {
            Tenqd : 'THIÊN THUỶ TỤNG',
            Stt : '1/6',
            Tthai: 'HUNG',
            Kword: 'bất hòa, cãi vã, kiện tụng, bất ổn',
            Nghia: 'Sẽ chẳng có điều gì diễn ra đúng theo mong đợi hay ước muốn. Mọi việc đầy khó khăn, phiền muộn, rắc rối và trở ngại. Không có lợi để tiến tới hay đi lên. Tốt nhất hãy thoái lui và giữ yên vị trí, chỗ đứng. đồng thời chờ đến khi vận hội thay đổi.'
        }, {
            Tenqd : 'THIÊN SƠN ĐỘN',
            Stt : '1/7',
            Tthai: 'HUNG',
            Kword: 'dã dối, trá hình, không trung thực',
            Nghia: 'Điềm báo trước cơ nghiệp suy. Xét về mọi mặt, hãy rút lui và giữ nguyên tình trạng đó. Hãy cực kỳ cẩn thận trọng lời nói, hành động và cách thức xử lý công việc, có thể an toàn cũng như vững vàng. Có thể bị vu khống bởi những kẻ như mụn, bị lôi kéo vào những phiền phức bởi cấp dưới, và có thể bị mất của cải hay tiền bạc'
        }, {
            Tenqd : 'THIÊN ĐỊA BĨ',
            Stt : '1/8',
            Tthai: 'HUNG',
            Kword: 'lôi thôi, không xong, thất bại, xấu',
            Nghia: 'Vận rủi. Mọi việc sẽ không diễn ra đúng như mong đợi, sẽ có thể gặp vất vả và cam go. Kẻ tiểu nhân có thể gây tổn thương, mất mát, thiệt hại cho mình. Thậm chí, bạn có thể phải trải qua nỗi đau khổi của chia ly hay ngăn cách. Vận hội có thể thay đổi nếu ta vẫn trước sau như một, can đảm và cố gắng. Tốt nhất hãy giữ nguyên tình trạng hiện tại'
        },{
            Tenqd : 'TRẠCH THIÊN QUẢI',
            Stt : '2/1',
            Tthai: 'HUNG',
            Kword: 'dứt khoát, rõ ràng',
            Nghia: 'Mặc dù cơ đồ đang sung thịnh, nhưng chẳng bao lâu khó khăn và gian nan sẽ xuất hiện. Phải cẩn thận, tự chủ và hết lòng đi theo con đường chính đáng. Có thể bị lôi kéo vào một trận tranh cãi hay bị bệnh vì làm việc quá sức. Bạn cũng có thể xử lý làm công việc, và do đó bị tổn thất. một người khác có thể đang ngấm ngầm gây khó khăn cho bạn'
        },{
            Tenqd : 'ĐOÀI VI TRẠCH',
            Stt : '2/2',
            Tthai: 'CÁT HANH',
            Kword: 'tươi đẹp, vui vẻ',
            Nghia: 'Vận hội cát tường với mọi sự diễn ra đúng như mong đợi. Ta có thể trải qua một biến cố hạnh phúc. mặt khác, những lời lẽ bất cần có thế dẫn đến rắc rối, hoặc một phụ nữ có thể gây cho ta sự khổ sử hay đau đớn. Trong đối nhân xử thế, hãy hòa nhã, mềm mỏng và thành thật. Trong xử lý công việc, hãy thận trọng và kỹ lưỡng'
        },{
            Tenqd : 'TRẠCH HOẢ CÁCH',
            Stt : '2/3',
            Tthai: 'CÁT',
            Kword: 'chiều theo, chuyển động, đi theo',
            Nghia: 'Tùy tượng trưng cho cái cương kiện đang phục tùng theo cái âm nhu, do đó giành được sự sẵn lòng phục tùng của mọi người và thành công trong công việc. Hãy tôn trọng ý kiến của người khác và hay nhận sự giúp đỡ của người khác – khi đó sự nghiệp sẽ thành công, đồng thời danh vọng và giàu sang sẽ đến'
        },{
            Tenqd : 'TRẠCH LÔI TUỲ',
            Stt : '2/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'lôi thôi, không xong, thất bại, xấu',
            Nghia: 'Vận rủi. Mọi việc sẽ không diễn ra đúng như mong đợi, sẽ có thể gặp vất vả và cam go. Kẻ tiểu nhân có thể gây tổn thương, mất mát, thiệt hại cho mình. Thậm chí, bạn có thể phải trải qua nỗi đau khổi của chia ly hay ngăn cách. Vận hội có thể thay đổi nếu ta vẫn trước sau như một, can đảm và cố gắng. Tốt nhất hãy giữ nguyên tình trạng hiện tại'
        },{
            Tenqd : 'TRẠCH PHONG ĐẠI QUÁ',
            Stt : '2/5',
            Tthai: 'LỢI',
            Kword: 'quá sức chịu đựng',
            Nghia: 'Bởi các gánh nặng và trách nhiệm quá sức nặng nề, không thể cưu mang hay thực hiện một cách hoàn chỉnh hay trọn vẹn được, do đó gặp phải thất bại. Nên đánh giá những ưu điểm và khuyết điểm của mình, và chọn ra đường hướng hành động thích hợp. Có thể bị lôi kéo vào những phiền phức, rắc rối và tâm trí của bạn rồi tung, Hành động hấp tấp và mù quáng sẽ khiến bạn gặp thất bại'
        },{
            Tenqd : 'TRẠCH THUỶ KHỐN',
            Stt : '2/6',
            Tthai: 'BÌNH HÒA',
            Kword: 'nguy lo, mệt mỏi, giữ mình chờ đợi',
            Nghia: 'Đang ở giữa cảnh khó khăn và thiếu thốn. Tuy nhiên, có thể chờ đại cho đến lúc hanh thông bằng cách lúc nào cũng giữ vững con đường chính trực, sự tự chủ và nhẫn nại. Thời điểm khó khăn, gieo neo, thất bại và côn độc. Sự tiến bước sẽ dẫn đến nghịch cảnh. Tất nhất là hãy thoát: lui và giữ nguyên trạng. Hãy kiên trì và tự chủ chờ cho đến lúc thời vận thay đổi'
        },{
            Tenqd : 'TRẠCH SƠN HÀM',
            Stt : '2/7',
            Tthai: 'CÁT',
            Kword: 'lắng nghe, xúc động, khả năng ăn nói tốt, chiều được tình cảm của người khác',
            Nghia: 'Toàn quả tượng trưng cho bình an và yên tịnh xuất phát từ sự hài lòng, kết quả của hạnh phúc hay vui vẻ. Trong đoán quả, điều này có nghĩa rằng mọi việc sẽ diễn ra đúng như hy vọng và sẽ có hạnh phúc. Tuy nhiên, phải tránh thái độ ngoan cố và bất chính, vì một tương tác như vậy sẽ gây ra ô uế'
        },{
            Tenqd : 'TRẠCH ĐỊA TUỴ',
            Stt : '2/8',
            Tthai: 'HANH',
            Kword: 'vui vẻ, nhen nhúm, quây quần',
            Nghia: 'Tinh thần và tài vật lực của một người đang được tập hợp lại. Đây là quẻ rất cát tường. Sự tụ tập của cải. Những người khác có thể mang lại sự hợp tác, và những lợi nhuận rất lớn có thể biến thành hiện thực được. Tốt nhất là hãy nghe theo lời khuyên của những bậc trưởng thượng. mùa gặt trúng đậm'
        },{
            Tenqd : 'HOẢ THIÊN ĐẠI HỮU',
            Stt : '3/1',
            Tthai: 'ĐẠI CÁT',
            Kword: 'độ lượng, đức độ',
            Nghia: 'Đang hưởng được vận may và sự kính trọng của mọi người. Sẽ gặt hái được rất nhiều lợi nhuận hay lợi ích nhưng trong tất cả mọi việc, phải hết sức cẩn thận và kỹ lưỡng để duy trì vận may của mình. Không nên tự mãn để đánh mất vận may của mình'
        },{
            Tenqd : 'HOẢ TRẠCH KHUÊ',
            Stt : '3/2',
            Tthai: 'HUNG',
            Kword: 'lìa xa, 2 bên lợi dụng lẫn nhau, mượn sức ra oai',
            Nghia: 'Diễn biến xấu, khó khăn, nhục nhằn. Các khó khăn sẽ chi phối mọi việc và các kỳ vọng sẽ chẳng đi đến đâu. Hay tránh sự tiến bước hay đi lên. Hãy an phận và hòa nhã thực hiện các công việc của mình. Khi đó, có thể biến nguy hiểm thành bình yên và an toàn. Có thể bị lôi kéo vào sự rắc rối nào đó liên quan đến người khác, thực hiện những kế hoạch lầm lẫn, hay khiến bạn bè ghét bỏ'
        },{
            Tenqd : 'LY VI HOẢ',
            Stt : '3/3',
            Tthai: 'HANH',
            Kword: 'tượng không yên, có việc xui rủi, nóng tính',
            Nghia: 'Vận may sẽ đến nếu hết lòng đi theo con đường chính đáng, giữ gìn tính khiêm tốn, có thái độ sẵn lòng giúp đỡ, biết tôn trọng ý kiến của người khác, và hợp tác với người khác trong mọi việc. Những đầu tư hợp tác sẽ thành công. Nghe theo ý kiến của bậc trưởng thường là cát tường. Nếu khinh suất, thiển cận hay dao động bởi tình cảm trong xử lý công việc, bạn sẽ thất bại'
        },{
            Tenqd : 'HOẢ LÔI PHỆ HẠP',
            Stt : '3/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'vặn vẹo, bám víu, hay hỏi vặn vẹo',
            Nghia: 'mọi việc sẽ không diễn ra đúng như mong đợi – nhiều khó khăn. Phải có hành động tích cực. Thái độ thụ động sẽ có nghĩa là thất bại giữa đường. nếu can đảm tiến bước, nhất định có thể đi đến đích. Có khả năng bạn sẽ tranh biện hay bất hòa với ai đó. Cách tốt nhất là tự thân xử trí vấn đề. Đừng trông dựa vào người khác'
        },{
            Tenqd : 'HOẢ PHONG ĐỈNH',
            Stt : '3/5',
            Tthai: 'CÁT HANH',
            Kword: 'Nhất cữ lưỡng tiện, ra đi đắc lợi, giao dịch tất thành, cầu tài có lộc, buôn bán phát tài',
            Nghia: 'Đã đến lúc mọi việc đều có thể thay đổi được. Với sự can đảm và khôn ngoan, nên sắp xếp ngăn nắp mọi thứ, đồng thời có những sắp đặt mới. Nếu làm được như vậy, vận may sẽ bắt đầu, và những triển vọng tươi sáng sẽ xuất hiện. Tuy nhiên, điều quan trọng nhất là phái giữ theo chính đạo. Có thể sẽ thay đổi chỗ ở hay thậm chí bị lôi kéo vào những phiền phức'
        },{
            Tenqd : 'HOẢ THUỶ VỊ TẾ',
            Stt : '3/6',
            Tthai: 'HUNG',
            Kword: 'mừng mừng lo lo nữa vời',
            Nghia: 'Vận hội giờ đây đang không được tốt đẹp cho lắm, nhưng sẽ dần dần thay đổi để trở nên tốt đẹp hơn. Từ từ, hãy hòa thuận cùng với mọi người, và vận may sẽ từ từ cải thiện. Sự khinh suất, liều lĩnh hay hấp tấp khi thực hiện các công việc sẽ dẫn đến thất bại. Không suôn sẻ, không việc gì diễn ra đúng như mong đợi. Hãy bình tĩnh, hãy tiến bước một cách đều đặn'
        },{
            Tenqd : 'HOẢ SƠN LỮ',
            Stt : '3/7',
            Tthai: 'BÌNH HÒA',
            Kword: 'tạm bợ, gá vào, đến rồi đi không bền',
            Nghia: 'Hãy xử lý các vấn đề bằng thái độ hòa nhã, thân thiện. Nếu được như vậy, khi đó mọi việc sẽ ổn thỏa. Điều sau đây có thể xảy ra: một sự thay đổi công việc, chỗ làm, hay nghề nghiệp có thể rơi vào cảnh côn độc và không có sự giúp đỡ, trong lúc đang thực hiện một chuyển đi, sự khó khăn hay rắc rối nào đó có thể nảy sinh trong nhà, sự thay đổi chỗ ở có thể dẫn đến rắc rối và buồn phiền'
        },{
            Tenqd : 'HOẢ ĐỊA TẤN',
            Stt : '3/8',
            Tthai: 'CÁT',
            Kword: 'điềm lành',
            Nghia: 'To lớn, thịnh đạt, sung túc, vận may. Có thể được trợ giúp bởi ai đó hay bậc trưởng thượng. Sự phát đạt trong kinh doanh, làm ăn và danh tiếng dần dần nổi trội, mọi việc diễn ra đúng như mang đại. Cũng thích hợp để cộng tác với người khác. Tuy nhiên, ai đó có thể đang đố kỵ với mình'
        },{
            Tenqd : 'LÔI THIÊN ĐẠI TRÁNG',
            Stt : '4/1',
            Tthai: 'CÁT',
            Kword: 'Đại thịnh, chí khí, tự lập tự cường, đơn độc, phượng đậu trên núi, độc lập',
            Nghia: 'Tài sản sung thịnh, công việc làm ăn phát đạt. Hiếu xử lý công việc thiếu thân thiện hay thiếu lòng chân thành sẽ dẫn đến xung đột và những hành động lo lắng, bốc đồng sẽ gây tổn thất hoặc thất bại. Phải có tấm lòng rộng mở và khiêm tốn trong xử sự với người khác hay trong xử lý công việc'
        },{
            Tenqd : 'LÔI TRẠCH QUY MUỘI',
            Stt : '4/2',
            Tthai: 'HUNG',
            Kword: 'mù mịt, rối ren, lôi thôi, luộm thuộm',
            Nghia: 'nếu mê đắm với lạc thú thể xác mà vi phạm các qui ước của xã hội. chẳng bao lâu sẽ gặp phải điều không may. Do đó, phải thay đổi cách sống để trở thành người tốt hơn, và phải sửa đổi bản thân mình để tránh tai họa. Chẳng có cái gì vẫn trước sau như một từ lúc khởi đầu cho đến tận lúc cuối. Cũng có thể bị lôi kéo vào những phiền toái nào đó'
        },{
            Tenqd : 'LÔI HOẢ PHONG',
            Stt : '4/3',
            Tthai: 'CÁT HANH',
            Kword: 'phú quý, dồi dào, sung túc',
            Nghia: 'Hưởng được vận may, sự suôn sẻ. Tuy nhiên, sự tự mãn, lơ đễnh và thiếu cố gắng sẽ dẫn đến vận hội suy vi. Phải tránh sự hoang phí, ngông cuồng, khoa trương và tự đắc. Có khả năng việc làm cho người ta chú ý đến mình quá nhiều sẽ dẫn đến tình trạng bị lửa hay bị vướng vào sự rắc rối nào đó. Trung lãnh vực nghệ thuật và trong các ngành nghề văn hóa, tương lai sẽ là những triển vọng vô hạn'
        },{
            Tenqd : 'CHẤN VI LÔI',
            Stt : '4/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'giai đoạn đầu thường gây chấn động khắp nơi',
            Nghia: 'Vận hội đang thay đổi từ bóng tối sang ánh sáng. Hãy thực hiện mọi việc cẩn thận, đồng thời theo trình tự hợp lý, và khắc phục các khôn khăn. Có thể thành công hay thừa kế công việc của ai đó, và gặt hải được danh tiếng lẫn của cải. Mặt khác, thái độ quá tự tin, sự bất chấp ý kiến của người khác, hay sự thiển cận có thể dẫn đến xung đột hay thất bại. Phải thận trọng'
        },{
            Tenqd : 'LÔI PHONG HẰNG',
            Stt : '4/5',
            Tthai: 'CÁT',
            Kword: 'xưa cũ, lâu bền dư đẵng, chung thủy, bền lâu, từ từ, chậm chạp',
            Nghia: 'nên duy trì tình trạng hiện tại và tránh các kế hoạch mới. Nhờ vậy, có thể đạt được vận may lâu dài và thoát khỏi ưu phiền. Trung hậu, thành thật và việc bảo vệ vị thế một cách cẩn thận sẽ có nghĩa là mọi việc suôn sẻ, và có thể duy trì được sự thịnh vượng của mình. Trên là Chấn trưởng nam, dưới là Tốn, trưởng nữ, chồng trên vợ dưới ,rất hợp đạn, thì tất được lâu dài'
        },{
            Tenqd : 'LÔI THUỶ GIẢI',
            Stt : '4/6',
            Tthai: 'CÁT',
            Kword: 'làm xua tan sự nguy hiểm, sấm động, không còn nguy hiểm, lan truyền ra ngoài',
            Nghia: 'Những gian khổ đang tan dần, sự vận động mái có thể bắt đầu. Sau một thời gian dài gian khổ, vận hội đang bắt đầu thay đổi và tiến triển theo hướng suôn sẻ và tuyệt vời. Hãy hành động tích cực, hãy nắm bắt cơ hội này, và hãy đấu tranh cho danh tiếng và cơ đồ. Hành động mới ở hướng tây nam là cát tưởng. một sự việc vui vẻ có thể xảy ra trong gia đình'
        },{
            Tenqd : 'LÔI SƠN TIỂU QUÁ',
            Stt : '4/7',
            Tthai: 'BÌNH HÒA',
            Kword: 'thiếu cường lực, buồn thảm, nhỏ nhặt, gian nan, vất vả, bị chèn ép',
            Nghia: 'Không hy vọng làm được điều gì đó bên ngoài phạm vi chuyên môn hay khả năng của mình. Hãy đặc biệt cẩn thận đừng tranh biện với người khác hẳn với mình về thế mạnh hay khả năng nội tại, bởi vì điều này sẽ dẫn đến thất bại. Kiềm chế và giữ nguyên trạng là cát tường. Tiến bước đi lên là bất lợi. Có khả năng sẽ chia tay với bạn bè thân hay bà con thân thích, bởi phạm sai lầm trong công việc'
        },{
            Tenqd : 'LÔI ĐỊA DỰ',
            Stt : '4/8',
            Tthai: 'LỢI',
            Kword: 'Duyệt dã. Thuận động. Dự bị, dự phòng, canh chừng, sớm, vui vầy. Thượng hạ duyệt dịch chi tượng: tượng trên dưới vui vẻ.',
            Nghia: 'Mọi việc sẽ diễn ra đúng như mang đợi nhưng không nên lơ là, biếng nhác hay sao lãng. Nếu không sẽ tự mang đến cho mình vận rủi và đau khổ, chua xót. Cùng lúc đó, phải biết làm chủ bản thân mình trong cuộc sống cá nhân, và kiểm tra giấy tờ hay tư liệu cá nhân để phỏng khi bảo vệ cho mình thoát khỏi sự rắc rối hay phiền phức bất ngờ. Thêm nữa, phải đề phòng kẻ trộm'
        },{
            Tenqd : 'PHONG THIÊN TIỂU XÚC',
            Stt : '5/1',
            Tthai: 'BÌNH HÒA',
            Kword: 'cô quả, cô độc, oán hận, nhỏ nhen, tiểu nhân, Tắc dã. Dị đồng. Lúc bế tắc, không đồng ý nhau, cô quả, súc oán, chứa mọi oán giận, có ý trái lại, không hòa hợp, nhỏ nhen',
            Nghia: 'ám chỉ mọi việc sẽ không diễn ra trôi chảy hay êm đẹp. Đầy trở ngại. mọi việc sẽ không diễn ra như mong đợi. Đừng bi quan, yếu đuối hay quá độ. Hãy kiên nhẫn và tiếp tục cố gắng, bởi vì sau khi mây tan sẽ có ánh sáng mặt trời và vận hội sẽ thay đổi.'
        },{
            Tenqd : 'PHONG TRẠCH TRUNG PHU',
            Stt : '5/2',
            Tthai: 'CÁT HANH',
            Kword: 'Trung thực, uy tín từ trong ra ngoài',
            Nghia :'Hãy xử trí với mọi công việc bằng lòng thành tín và thật lòng, hãy tin tưởng người khác. Những ý định xấu và sự xem thường lòng tin cây sẽ dẫn đến điều không may. Khi cư xử với người khác, hay đặc biệt chú ý đến lòng tin tưởng. Những cuộc đầu tư hợp tác là cát tường. Có khả năng sẽ có những chuyến đi thường xuyên'
        },{
            Tenqd : 'PHONG HOẢ GIAI NHÂN',
            Stt : '5/3',
            Tthai: 'CÁT',
            Kword: 'nảy nở, đồng nghiệp, trổ bông sinh trái, tăng trưởng, mở mang, phát triển thêm',
            Nghia: 'Phải giữ mình tu dưỡng chứ không phải tiến lên điều hành việc nào đó. Gia đình đang đi trên con đường thích hợp và thịnh vượng vận may to lớn và tràn đầy niềm vui. Hãy thực hiện bổn phận của mình và hãy chăm chỉ làm việc mà không có bất kỳ toan tính hay hành động hấp tấp, liều lĩnh nào khác. Như vậy, mới có thể giữ gìn được van may'
        },{
            Tenqd : 'PHONG LÔI ÍCH',
            Stt : '5/4',
            Tthai: 'CÁT',
            Kword: 'có thêm, vượt lên, thêm lợi lộc, vang xa, có quý nhân phù trợ',
            Nghia: 'Hướng được sự suôn sẻ và vận may – thời điểm thích hợp để khỏi xướng hay khuếch trương. Hãy quả quyết và mạnh dạn tiến bước về phía trước. Đừng chần chừ hay do dự. Cùng lúc đó, phải nghĩ đến người khác và nghĩ cách, làm sao cho đôi bên cùng có lợi. Có thể được ai đó giúp đỡ. Hạnh phúc có thể sẽ diễn ra trong gia đình bạn. Đầu tư hợp tác các tường'
        },{
            Tenqd : 'TỔN VI PHONG',
            Stt : '5/5',
            Tthai: 'BÌNH HÒA',
            Kword: 'nhu thuận, kết hợp, hòa nhập, thẩm thấu, giao hòa',
            Nghia: 'Vận hội đang chuyển động giống như cơn gió. Bất ổn định và quanh ca. Trong đối nhân hay xử thế, phải có thái độ khiêm cung, tùng phục và nhanh chóng thích ứng theo hoàn cảnh đổi thay. Có thể gặp những rủi ro sau đây: trộm cướp, sự bất lợi do chần chừ và thiếu dứt khoát, sự tổn thất do xung đột hay hành vi manh động'
        },{
            Tenqd : 'PHONG THUỶ HOÁN',
            Stt : '5/6',
            Tthai: 'HANH',
            Kword: 'xa lánh, hao, tán ra, ly tán',
            Nghia: 'Vận hội bắt đầu thay đổi và các gian nan đang tan dần nhưng cũng đừng quá dễ dãi, buông lỏng. Thất bại sẽ đến từ sự thiếu thận trọng, bất cẩn và quá phóng túng. Những điều sau đây có thể xảy ra: một chuyến đi xa nhà, nhận được sự giúp dỡ của ai đó, hoặc sự thất bại do thiếu ý chỉ hay không kiên định'
        },{
            Tenqd : 'PHONG SƠN TIỆM',
            Stt : '5/7',
            Tthai: 'CÁT',
            Kword: 'Tuần tự. Từ từ, thong thả đến, lần lần, bò tới, chậm chạp, nhai nhỏ nuốt vào, phúc lộc đến từ từ, chậm mà chắc',
            Nghia: 'Vận may đang dần dần hé mở mọi việc đang từ từ trở nên suôn sẻ, êm đẹp. Tương lai đầy xán lạn và hy vọng. Thành công sẽ đến từ sự tiến bước dần dần. Tiến tới phía trước quá nhanh hay khinh suất thì bất lợi. Đối với phụ nữ, quẻ này có nghĩa rằng có khả năng sẽ có một biến cố vui vẻ nào đó xảy ra'
        },{
            Tenqd : 'PHONG ĐỊA QUAN',
            Stt : '5/8',
            Tthai: 'BÌNH HÒA',
            Kword: 'thắng trận, lướt qua, bèo hợp mây tan',
            Nghia: 'Bắt đầu của sự suy tàn, xuống dốc. cần phải biết suy ngẫm và xem xét bản thân, cũng như phải biết dối xử với người khác bằng thái độ chân tình để đảm bảo sự bình an, yên tĩnh. Nếu có thể giành được sự ủng hộ hay giúp đỡ của các bậc trưởng thượng hoặc cấp trên của mình, sẽ có khả năng thăng tiến'
        },{
            Tenqd : 'THUỶ THIÊN NHU',
            Stt : '6/1',
            Tthai: 'CÁT',
            Kword: 'quân tử, hội họp vui vẻ, chờ thời, nghiên cứu, tìm tòi',
            Nghia: 'Hãy tìm phương cách thích hợp, và phải quyết tâm cũng như tận tâm. Đừng hấp tấp, liều lĩnh, khinh suất hay quá cực đoan trang hành động. Hay chủ thời cơ và vận may đến, cuối cùng, sẽ thực hiện được các kỳ vọng và khát vọng của mình. Nếu tham lợi lộc hay lợi thế nhỏ đang có trước mắt, tất sẽ gánh chịu thất bại'
        },{
            Tenqd : 'THUỶ TRẠCH TIẾT',
            Stt : '6/2',
            Tthai: 'CÁT',
            Kword: 'tiết chế chừng mực, nói chuyện hay bị mất lòng',
            Nghia: 'Việc xem thường nguyên tắc thứ tự và chừng mực, lẫn những hành động bừa bãi bắt nguồn từ sự say sưa trong khoái lạc dẫn đến thất bại và bất hạnh. Trong kinh doanh, các chi tiêu có thể đang quá lớn. Có những khó khăn về tài chính. Sự việc sẽ không diễn ra suôn sẻ. Những lời nói bất cẩn, những lời đàm tiếu hay những lời vu khống hoặc phỉ báng có thể gây ra tổn thương'
        },{
            Tenqd : 'THUỶ HOẢ KÝ TẾ',
            Stt : '6/3',
            Tthai: 'CÁT HANH',
            Kword: 'thuận tự nhiên, có lợi nhỏ, vui vẻ',
            Nghia: 'Thảnh thơi, cơ đồ sung thịnh. Sẽ có những thành tựu, nhưng khi may mắn đã lên đến cực độ, những dấu hiệu suy tàn sẽ xuất hiện. Do đó, phải không được kiêu căng hay lơ là. Thận trọng và kỹ lưỡng là điều bắt buộc. Không nên thực hiện những kế hoạch cho các phát triển mới. Hãy giữ nguyên tình trạng hiện thời, hay sắp xếp ngăn nắp mọi thứ'
        },{
            Tenqd : 'THUỶ LÔI TRÂN',
            Stt : '6/4',
            Tthai: 'HUNG',
            Kword: 'do dự, vất vả, truân chuyên, trắc trở',
            Nghia: 'Hãy cô” gắng chịu đựng những khó khăn hiện tại, nỗ lực trong thầm lặng. Nếu khởi lập doanh nghiệp, sẽ gặp nhiều rủi ro và gian nan. Đừng hành động cẩu thả, liều lĩnh hay mù quáng. Phải có lòng dũng cảm chịu đựng để đấu tranh bằng quyết tâm và sự hết lòng. Nếu đa nỗ lực toàn tâm toàn ý, những khó khăn sẽ dần dần được giải quyết'
        },{
            Tenqd : 'THUỶ PHONG TỈNH',
            Stt : '6/5',
            Tthai: 'BÌNH HÒA',
            Kword: 'tĩnh lặng, trầm tĩnh, lặng, ổn định, bình an',
            Nghia: 'Người ta phải có những hành vi thiện lành để tạo lợi ích cho người khác. Cùng lúc đó, người ta cũng cần phải giữ gìn sự an bình và yên tịnh giống như giếng. May mắn của sự yên tịnh và hòa nhã. Tất nhất hãy tránh hành động cực đoan. Hãy giữ nguyên hiện trạng để gìn giữ sự bình an, yên tĩnh và chấp nhận hoàn cảnh hiện tại'
        },{
            Tenqd : 'KHẢM VI THUỶ',
            Stt : '6/6',
            Tthai: 'BÌNH HÒA',
            Kword: 'gập gềnh, khổ tận cam lai',
            Nghia: 'Nhiều gian khổ và khó khăn. Phải có lòng tin chắc chắn và không sự khó. Điều duy nhất cần làm là chờ đến lúc vận hội thay đổi. Không thể tiến tới, cũng không thể thoái lui. Có lẽ thân tâm đều sẽ bất an, không thể sống yên ổn. Trong cảnh nổi trôi, có thể gặp phải trộm cắp, lừa gạt, bệnh tật hoặc bị thương tích hay tổn thương'
        },{
            Tenqd : 'THUỶ SƠN KIỂN',
            Stt : '6/7',
            Tthai: 'HUNG',
            Kword: 'trở ngại, khó khăn, tai nạn chân tay',
            Nghia: 'Có những gian nan lẫn khốn khổ. Hãy chờ đợi nhẫn nại bằng thái độ tự chủ, tuân theo những bậc tài giỏi và đức hạnh, hãy trau dồi bản thân. Trong vùng sớm nhất là năm tháng hay năm năm. Sự phát triển sang hướng tây nam thì có thể tốt, nhưng bất lợi sẽ theo liền với những bước tiến về phía đông bắc. Tránh nạn trộm cắp, lừa gạt, lũ lụt, hay bạn bè thân hãm hại'
        },{
            Tenqd : 'THUỶ ĐỊA TỶ',
            Stt : '6/8',
            Tthai: 'CÁT',
            Kword: 'việc tiếp xúc với người khác sẽ diễn ra tốt đẹp và mọi việc sẽ được tiến hành thuận lợi. Nếu sống riêng rẽ, lưng chừng, không chịu đoàn kết với nhau ắt sẽ gặp hoạ hung',
            Nghia: 'Thanh bình, an toàn, tốt lành. Nên hòa đồng với mọi người và thân thiết với người khác. Nhưng nếu hành động tra trán và quá đáng, sẽ làm tiêu tan vận may này. Đoàn kết và hợp tác với người khác khi làm điều gì đó sẽ mang đến tốt lành. Vận may cũng sẽ bao gồm sự ủng hộ, lòng tin của mọi người, sự tin tưởng của mọi người vào tiến triển của công việc'
        },{
            Tenqd : 'SƠN THIÊN ĐẠI SÚC',
            Stt : '7/1',
            Tthai: 'CÁT',
            Kword: 'cục bộ 1 phe, tiến triển thành đại, chứa đựng',
            Nghia: 'Trong lúc này, mọi việc đều ngưng đọng và thoái trào, không diễn ra đúng như mong đợi. Nhưng nếu không xem sự làm việc chăm chỉ, siêng năng là khôn lao và vẫn giữ được sự điềm tĩnh, thanh thản, sẽ vượt qua được các khó khăn trong tương lai gần và thực hiện được mục tiêu của mình. Có thể tiết kiệm tiền bạc, thực hiện công việc làm ăn nào đó, giành được sự ủng hộ hay yêu mến'
        },{
            Tenqd : 'SƠN TRẠCH TỔN',
            Stt : '7/2',
            Tthai: 'BÌNH HÒA',
            Kword: 'đề phòng sự việc, tổn hao, hao tổn',
            Nghia: 'Tuy hiện thời đang có sự tổn thất hay thiệt hại, nhưng chẳng bao lâu tình hình sẽ được cân bằng trở lại và hanh thông. Mọi việc không diễn ra đúng như mong đợi và thậm chí có thể gặp phải sự tổn thất. Nhưng dần dần dòng triều bất lợi này sẽ đổi chiều, và những tia bình minh của sự thành công sẽ ló dạng. Những dầu tư hợp tác là cát tưởng'
        },{
            Tenqd : 'SƠN HOẢ BÍ',
            Stt : '7/3',
            Tthai: 'ĐẠI CÁT',
            Kword: 'rõ ràng, sáng suốt, quang minh được nhiều người biết đến',
            Nghia: 'Những gì người ta thấy và biết chỉ là thiển cận, ở trước mắt - chẳng có sự nhìn xa trông rộng hay suy nghĩ sâu xa. Bất kỳ việc gì có liên quan đến nghệ thuật hay mỹ thuật đều thuận lợi. Đối với những việc khác, việc nhỏ thì cát tường, nhưng ở các việc lớn, lực bất tòng tâm (khả năng không phù hợp với ý muốn). Có khả năng có thể bị lừa, mắc bẫy hoặc bị vu khống'
        },{
            Tenqd : 'SƠN LÔI DI',
            Stt : '7/4',
            Tthai: 'CÁT',
            Kword: 'rồng nghỉ ngơi, nuôi dưỡng, nên bồi bổ sức khỏe về ăn uống',
            Nghia: 'Những hành động hấp tấp sẽ dẫn đến thất bại. Phải giữ vững con đường chính đáng của mình, vun bồi nhân cách và khả năng để đạt được thành công. Những lời nói và hành vi bất cẩn có thể mang dén điều không may. Bệnh tật có thể đến từ sự thiếu chăm sóc sức khỏe đúng đắn. Những đầu tư hợp tác thì thuận lợi và khả quan hơn những đầu tư một mình'
        },{
            Tenqd : 'SƠN PHONG CỔ',
            Stt : '7/5',
            Tthai: 'HUNG',
            Kword: 'có sự không yên trong lòng, sửa chữa lại, ngờ vực, tu sửa lại',
            Nghia: 'Tình hình xung quanh cực kỳ rối loạn và phức tạp. Phải dụng công để dọn dẹp ngăn nắp hay duy trì trật tự bằng không sẽ gặp thất bại. Mọi việc đều ngừng trệ và ách tắc - nhiều loại khó khăn và trở ngại xuất hiện. Cùng lúc đó, phải lo toan cho gia đình. Việc gia đình có thể cũng đang rối loạn và xáo trộn'
        },{
            Tenqd : 'SƠN THUỶ MÔNG',
            Stt : '7/6',
            Tthai: 'HUNG',
            Kword: 'không trung thực, mông lung, mê muội',
            Nghia: 'Có sự thiếu dứt khoát, và thiếu quyết tâm. Bạn nên đi theo hay vâng theo các chỉ dẫn của người lớn tuổi, nhiều kinh nghiệm, đồng thời đón nhận lời chỉ bảo bằng thái độ khiêm tốn và cởi mở. Với sự nhẫn nại, lòng tự trọng và tình thần kỷ luật, hãy chờ đợi cho đến khi có chuyển biến tốt đẹp hơn. Khi đó, tương lai xán lạn sẽ đến'
        },{
            Tenqd : 'CẤN VI SƠN',
            Stt : '7/7',
            Tthai: 'BÌNH HÒA',
            Kword: 'chờ đợi, không làm nữa, ngăn cấm',
            Nghia: 'Nhiều trở ngại. Vận hội đang đình trệ và bất động. Hãy bàng quan với các lợi ích thế gian, đừng nói năng quả nhiều, hãy cao thượng và tôn quí giống như ngọn núi, và hay giữ vững những niềm tin hoặc nhận thức không gì lay chuyển mình và chờ đến lúc thích hợp'
        },{
            Tenqd : 'SƠN ĐỊA BÁC',
            Stt : '7/8',
            Tthai: 'HUNG',
            Kword: 'đến rồi đi, buồn thảm, bà con xa lìa nhau và rơi rụng',
            Nghia: 'Vận may của đang xuống dốc. Có thể xảy ra cảnh buồn bã, nghèo khổ hay suy vì trong công việc hoặc sự nghiệp. Thêm nữa, thậm chí có thể bị lôi kéo vào việc tình ái, bị phản bội, bị vu khống, hay bị hại bởi ai đó, và do đó bị mất mát tiền bạc, tài sản.... Phải cẩn thận và thậm chí nên rút lui để bảo toàn tình trạng hay địa vị của mình'
        },{
            Tenqd : 'ĐỊA THIÊN THÁI',
            Stt : '8/1',
            Tthai: 'CÁT HANH',
            Kword: 'trời đất giao hòa, phát triển về phía trước, mở mang, am tường, thấu tình đạt lý',
            Nghia: 'mọi việc sẽ diễn ra đúng như mong đợi hay hy vọng; tương lai trông thật khả quan. Việc kinh doanh sẽ hưng thịnh. Thậm chí có thể côn cơ hội để vui chơi. Nhưng không được vì lẽ đó mà trở nên kiêu ngạo, chểnh mảng, bất cẩn hay lơ là'
        },{
            Tenqd : 'ĐỊA TRẠCH LÂM',
            Stt : '8/2',
            Tthai: 'BÌNH HÒA',
            Kword: 'Bao quản. Việc lớn, người lớn, cha nuôi, vú nuôi, giáo học, nhà sư, kẻ cả, dạy dân, nhà thầu. Quân tử dĩ giáo tư chi tượng: người quân tử dạy dân, che chở, bảo bọc cho dân vô bờ bến.',
            Nghia: 'nếu xử lý mọi việc với thái độ nhường nhịn và hợp tác, cư xử với người khác phù hợp với qui tắc đạo đức đúng đắn, sẽ hưởng được vận may và mọi việc sẽ diễn ra đúng theo mong đợi. Tuy nhiên, để duy trì được vận may, phải biết khiêm tốn, không được ngạo mạn hay hống hách, đồng thời phải đối xử với người khác một cách hòa nhã và nồng hậu'
        },{
            Tenqd : 'ĐỊA HOẢ MINH DI',
            Stt : '8/3',
            Tthai: 'HUNG',
            Kword: 'đau lòng, vắng bóng, tối tăm',
            Nghia: 'Giống như đêm tối, tương lai thật mù mờ, do đó phải nên hết sức cẩn thận cho đến khi bầu trời sáng tỏ. Hãy chờ đợi nhẫn nại cho đến khi vành sáng trở lại trước khi hành động hay tiến bước. Vận rủi, gian nan và vất vả. Ai đó có thể ghen ghét, đố kỵ hay lừa đảo. Có thể bị tổn thương. Phải thật cẩn thận và chờ đợi nhẫn nại với thái độ tự chủ cho đến khi vận hội thay đổi'
        },{
            Tenqd : 'ĐỊA LÔI PHỤC',
            Stt : '8/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'phục hồi, phản đòn, phục lương, quay đầu trở lại, tái diễn',
            Nghia: 'Gần đây vận hội của bạn thật xấu hay đại loại như vậy, nhưng giờ đây vận may đang đến gần. Hãy thận trọng tiến bước bằng những biện pháp có tính toán, biết cân nhắc và theo trình tự, tất cả sẽ chuyển biến tốt đẹp hơn. Đừng hành động liều lĩnh hay khinh suất. Quẻ này cũng gợi ý sự bắt đầu thành công của các kế hoạch'
        },{
            Tenqd : 'ĐỊA PHONG THĂNG',
            Stt : '8/5',
            Tthai: 'CÁT HANH',
            Kword: 'Tiến thủ. Thăng tiến, trực chỉ, tiến mau, bay lên, vọt tới trước, bay lên không trung, thăng chức, thăng hà. Phù giao trực thượng chi tượng: chà đạp để ngoi lên trên',
            Nghia: 'mọi việc đang diễn ra đúng như mong đợi. Đây là lúc cho sự tiến bước dần dần. Thực hiện các việc theo trình tự hợp lý hoặc như đã được hoạch định chu đáo là cát tưởng. Đừng hành động nông nổi hay vội vàng. Những phát triển về phía nam là cát tường. Hữu Ích để thuận theo người có quyền thế, ảnh hưởng và đức hạnh. Bạn có thế thăng tiến cấp bậc hay địa vị'
        },{
            Tenqd : 'ĐỊA THUỶ SƯ',
            Stt : '8/6',
            Tthai: 'CÁT',
            Kword: 'thầy bạn, thân mật, học hỏi, nương tựa lẫn nhau',
            Nghia: 'Thay đổi, chuyển động và dao động. Sóng lớn và gian nan rất nhiều. Đừng hời hợt chạy theo những kế hoạch nhỏ nhặt và phương tiện bất chính. Hay vạch kế hoạch cho bản thân, hãy giữ gìn chính đạo cũng như xử lý mọi việc bằng thái độ quyết tâm, kiên trì, khi đó có thể vượt qua hết mọi khó khăn, đồng thời còn đạt được sự độc đáo, thăng tiến, lợi nhuận cao'
        },{
            Tenqd : 'ĐỊA SƠN KHIÊM',
            Stt : '8/7',
            Tthai: 'CÁT',
            Kword: 'khiêm tốn nhún nhường, lui vào trong',
            Nghia: 'Sự thịnh đạt sẽ đến nếu hết giữ gìn sự khiêm tốn và chân thật trong hành động. an toàn và cát tường, mọi việc sẽ diễn ra đúng như mong đợi. Sẽ gặp thất bại nếu đánh mất lòng khiêm tốn và nhũn nhận. Phải thật nhún nhường'
        },{
            Tenqd : 'KHÔN VI ĐỊA',
            Stt : '8/8',
            Tthai: 'ĐẠI CÁT',
            Kword: 'mềm dẻo, toại chí nương nhờ, có lợi',
            Nghia: 'Đừng hấp tấp, vội vàng, cũng đừng khinh suất, liều lĩnh và đừng hành động một cách quyết liệt, triệt để hay cẩu thả. Hay thực hiện bổn phận của mình một cách thận trọng và có chăm chủ. Hãy nghe theo những lời khuyên của người có khả năng và người khôn ngoan'
        }
    ];

    function splitArray(arr) {
        if (arr.length == 2) {
            const variable1 = null;
            const variable2 = null;
            const variable3 = null;
            const variable4 = `${parseInt(arr[0]) > 8 ? parseInt(arr[0]) - 8 : parseInt(arr[0]) == 0 ? 8 : parseInt(arr[0])}/${parseInt(arr[1]) > 8 ? parseInt(arr[1]) - 8 : parseInt(arr[1]) == 0 ? 8 : parseInt(arr[1])}`;
            return [variable1, variable2, variable3, variable4];
        } else if (arr.length == 4) {
            const variable1 = null;
            const variable2 = null;
            const variable3 = `${parseInt(arr[0]) > 8 ? parseInt(arr[0]) - 8 : parseInt(arr[0]) == 0 ? 8 : parseInt(arr[0])}/${parseInt(arr[1]) > 8 ? parseInt(arr[1]) - 8 : parseInt(arr[1]) == 0 ? 8 : parseInt(arr[1])}`;
            const variable4 = `${parseInt(arr[2]) > 8 ? parseInt(arr[2]) - 8 : parseInt(arr[2]) == 0 ? 8 : parseInt(arr[2])}/${parseInt(arr[3]) > 8 ? parseInt(arr[3]) - 8 : parseInt(arr[3]) == 0 ? 8 : parseInt(arr[3])}`;
            return [variable1, variable2, variable3, variable4];
        } else if (arr.length == 6) {
            const variable1 = null;
            const variable2 = `${parseInt(arr[0]) > 8 ? parseInt(arr[0]) - 8 : parseInt(arr[0]) == 0 ? 8 : parseInt(arr[0])}/${parseInt(arr[1]) > 8 ? parseInt(arr[1]) - 8 : parseInt(arr[1]) == 0 ? 8 : parseInt(arr[1])}`;
            const variable3 = `${parseInt(arr[2]) > 8 ? parseInt(arr[2]) - 8 : parseInt(arr[2]) == 0 ? 8 : parseInt(arr[2])}/${parseInt(arr[3]) > 8 ? parseInt(arr[3]) - 8 : parseInt(arr[3]) == 0 ? 8 : parseInt(arr[3])}`;
            const variable4 = `${parseInt(arr[4]) > 8 ? parseInt(arr[4]) - 8 : parseInt(arr[4]) == 0 ? 8 : parseInt(arr[4])}/${parseInt(arr[5]) > 8 ? parseInt(arr[5]) - 8 : parseInt(arr[5]) == 0 ? 8 : parseInt(arr[5])}`;
            return [variable1, variable2, variable3, variable4];
        } else if (arr.length == 8) {
             // Lấy từ ký tự thứ 2 đến ký tự cuối cùng của mảng arr
            const variable1 = `${parseInt(arr[0]) > 8 ? parseInt(arr[0]) - 8 : parseInt(arr[0]) === 0 ? 8 : parseInt(arr[0])}/${parseInt(arr[1]) > 8 ? parseInt(arr[1]) - 8 : parseInt(arr[1]) === 0 ? 8 : parseInt(arr[1])}`;
            const variable2 = `${parseInt(arr[2]) > 8 ? parseInt(arr[2]) - 8 : parseInt(arr[2]) === 0 ? 8 : parseInt(arr[2])}/${parseInt(arr[3]) > 8 ? parseInt(arr[3]) - 8 : parseInt(arr[3]) === 0 ? 8 : parseInt(arr[3])}`;
            const variable3 = `${parseInt(arr[4]) > 8 ? parseInt(arr[4]) - 8 : parseInt(arr[4]) === 0 ? 8 : parseInt(arr[4])}/${parseInt(arr[5]) > 8 ? parseInt(arr[5]) - 8 : parseInt(arr[5]) === 0 ? 8 : parseInt(arr[5])}`;
            const variable4 = `${parseInt(arr[6]) > 8 ? parseInt(arr[6]) - 8 : parseInt(arr[6]) === 0 ? 8 : parseInt(arr[6])}/${parseInt(arr[7]) > 8 ? parseInt(arr[7]) - 8 : parseInt(arr[7]) === 0 ? 8 : parseInt(arr[7])}`;
            return [variable1, variable2, variable3, variable4];
        }else{
            arr = arr.slice(2, arr.length);
            const variable1 = `${parseInt(arr[0]) > 8 ? parseInt(arr[0]) - 8 : parseInt(arr[0]) === 0 ? 8 : parseInt(arr[0])}/${parseInt(arr[1]) > 8 ? parseInt(arr[1]) - 8 : parseInt(arr[1]) === 0 ? 8 : parseInt(arr[1])}`;
            const variable2 = `${parseInt(arr[2]) > 8 ? parseInt(arr[2]) - 8 : parseInt(arr[2]) === 0 ? 8 : parseInt(arr[2])}/${parseInt(arr[3]) > 8 ? parseInt(arr[3]) - 8 : parseInt(arr[3]) === 0 ? 8 : parseInt(arr[3])}`;
            const variable3 = `${parseInt(arr[4]) > 8 ? parseInt(arr[4]) - 8 : parseInt(arr[4]) === 0 ? 8 : parseInt(arr[4])}/${parseInt(arr[5]) > 8 ? parseInt(arr[5]) - 8 : parseInt(arr[5]) === 0 ? 8 : parseInt(arr[5])}`;
            const variable4 = `${parseInt(arr[6]) > 8 ? parseInt(arr[6]) - 8 : parseInt(arr[6]) === 0 ? 8 : parseInt(arr[6])}/${parseInt(arr[7]) > 8 ? parseInt(arr[7]) - 8 : parseInt(arr[7]) === 0 ? 8 : parseInt(arr[7])}`;
            return [variable1, variable2, variable3, variable4];
        }
      }
      

      document.getElementById("logoutButton").addEventListener("click", function () {
        // Chuyển hướng về trang đăng nhập (index.html)
        window.location.href = "index.html";
    });

    //menh
    function findMenh(nsinh) {
        for (const item of Namsinh) {
            if (item.ns == nsinh) { // Kiểm tra điều kiện
                return item.mh; // Trả về giá trị của thuộc tính mh nếu điều kiện đúng
            }
        }
        // Trả về null hoặc một giá trị mặc định nếu không tìm thấy
        
    }
    function DienGiai(nsinh) {
        for (const item of Namsinh) {
            if (item.ns == nsinh) { // Kiểm tra điều kiện
                return item.dd; // Trả về giá trị của thuộc tính mh nếu điều kiện đúng
            }
        }
        // Trả về null hoặc một giá trị mặc định nếu không tìm thấy
        
    }

    function compareArrays(array1, array2) {
        let result = [];
    
    // Duyệt qua từng phần tử của mảng thứ nhất
    for (let i = 0; i < array1.length; i++) {
        let found = false;
        // Lặp qua từng đối tượng trong mảng thứ hai
        for (let j = 0; j < array2.length; j++) {
            // So sánh phần tử của mảng thứ nhất với thuộc tính "id" của đối tượng trong mảng thứ hai
            if (array1[i] == array2[j].id) {
                // Nếu trùng, thêm một thuộc tính của đối tượng đó vào mảng kết quả
                result.push(array2[j].ynghia); // Thay propertyName bằng tên thuộc tính bạn muốn lấy
                found = true;
                break; // Kết thúc vòng lặp khi đã tìm thấy kết quả
            }
        }
        if (!found) {
            // Xử lý trường hợp không tìm thấy kết quả
            result.push("-"); // Giá trị mặc định khi không tìm thấy kết quả
        }
    }
    
    return result;
    }
    function snvan (Arr,Menhhh)
    {
        
        let result;
        switch (Menhhh) {
            case "Kim":
                result = compareArrays(Arr, DataKim);
                break;
            case "Mộc":
                result = compareArrays(Arr, DataMoc);
                break;
            case "Thủy":
                result = compareArrays(Arr, DataThuy);
                break;
            case "Hỏa":
                result = compareArrays(Arr, DataHoa);
                break;
            case "Thổ":
                result = compareArrays(Arr, DataTho);
                break;
            default:
                result = [];
                break;
        }
        return result;
    }
    
    function displayArrayElements(array) {
        array.forEach(function(element, index) {
            console.log("Phần tử thứ " + (index + 1) + ": ", element);
        });
    }
    
    const bbdn = [
        { ds: [19, 43, 34, 91, 26, 78, 62, 87], tn: 'Diên niên' },
        { ds: [28, 41, 82, 14, 93, 67, 39, 76], tn: 'Sinh Khí' },
        { ds: [27, 49, 13, 31, 72, 68, 94, 68], tn: 'Thiên Y' },
        { ds: [11, 33, 44, 88, 22, 77, 66, 99], tn: 'Phục Vị' },
        { ds: [63, 18, 81, 36, 92, 97, 24, 19], tn: 'Ngũ Quỷ' },
        { ds: [69, 12, 84, 37, 48, 96, 21, 73], tn: 'Tuyệt Mệnh' },
        { ds: [61, 16, 83, 38, 47, 74, 92, 29], tn: 'Lục sát' },
        { ds: [64, 17, 89, 32, 46, 98, 23, 71], tn: 'Họa Hại' }
    ];
    
    function kiemTraVaTaoMang(arr1, arr2) {
        const mangMoi = [];
        let soPhanTu = 0;
        for (let i = 0; i < arr2.length && soPhanTu < 4; i++) {
            const phanTu = arr2[i];
            const phanTuTuongUng = arr1.find(item => item.ds.includes(phanTu));
            if (phanTuTuongUng) {
                const mangPhanTu = {
                    tn: phanTuTuongUng.tn,
                    length: arr2.length
                };
                mangMoi.push(mangPhanTu);
                soPhanTu++;
            } else {
                mangMoi.push({ tn: 'N/A', length: arr2.length });
                soPhanTu++;
            }
        }
        return mangMoi;
    }

     

    // phần 2 
    function showInputValue() {
        // Lấy thẻ input theo class
        var inputElement = document.querySelector('.chuoi');
    
        // Lấy nội dung của thẻ input
        var inputValue = inputElement.value;
       
        // Hiển thị giá trị trong console
        
       console.log("độ dài chuỗi : "+ inputValue.length);
        // Hoặc bạn có thể làm gì đó với giá trị này, ví dụ như hiển thị trong một phần tử khác
        // var displayElement = document.getElementById("displayContent");
        // displayElement.textContent = "Nội dung của input là: " + inputValue;
        var dt = inputValue;
        var bien1 = inputValue.substring(0, 4); // Lấy 4 kí tự đầu
        var bien2 = inputValue.substring(4, 10); // Lấy 6 kí tự tiếp theo (từ kí tự thứ 5 đến kí tự thứ 10)
        var bien4 ;
        var bien41;
        if (inputValue.length == 2) {
            // Nếu độ dài của inputValue là 2, thêm 6 phần tử null vào trước bien3
            bien41 =  inputValue.substring(0, inputValue.length);
            
        } else if (inputValue.length == 4) {
            // Nếu độ dài của inputValue là 4, thêm 4 phần tử null vào trước bien3
            bien41 =  inputValue.substring(0, inputValue.length);
            
        } else if (inputValue.length == 6) {
            // Nếu độ dài của inputValue là 6, thêm 2 phần tử null vào trước bien3
            bien41 =  inputValue.substring(0, inputValue.length);
        } else {
            // Nếu độ dài của inputValue là 8 hoặc hơn, chỉ sử dụng từ vị trí thứ 2 trở đi
            bien41 = inputValue.substring(4,10);
        }
        var mang_4_phan_tu = [];
        var bien4;
        var mang_4_phan_tu = [];
        if (inputValue.length == 2) {
            // Nếu độ dài của inputValue là 2, thêm 6 phần tử null vào trước bien3
            bien4 =  inputValue.substring(0, inputValue.length);
            
        } else if (inputValue.length == 4) {
            // Nếu độ dài của inputValue là 4, thêm 4 phần tử null vào trước bien3
            bien4 =  inputValue.substring(0, inputValue.length);
            
        } else if (inputValue.length == 6) {
            // Nếu độ dài của inputValue là 6, thêm 2 phần tử null vào trước bien3
            bien4 =  inputValue.substring(0, inputValue.length);
        } else if (inputValue.length == 8) {
            // Nếu độ dài của inputValue là 6, thêm 2 phần tử null vào trước bien3
            bien4 =  inputValue.substring(0, inputValue.length);
        } else {
            // Nếu độ dài của inputValue là 8 hoặc hơn, chỉ sử dụng từ vị trí thứ 2 trở đi
            bien4 = inputValue.substring(2, 10);
        }
       // Chia chuỗi thành các phần tử con
       if (bien4.length == 2) {
        mang_4_phan_tu.push(parseInt(bien4));
    }else{
        for (let i = 0; i < bien4.length; i += 2) {
                mang_4_phan_tu.push(parseInt(bien4.slice(i, i + 2)));
         }
    }
       // Chia chuỗi thành các phần tử con
       for (let i = 0; i < bien4.length; i += 2) {
               mang_4_phan_tu.push(parseInt(bien4.slice(i, i + 2)));
        }

        //console.log("Kiểu : "+ typeof(mang_4_phan_tu));
        
        console.log(kiemTraVaTaoMang(bbdn,mang_4_phan_tu));
        var mangmoi = kiemTraVaTaoMang(bbdn,mang_4_phan_tu);

        var bien3;
       
       if (inputValue.length == 2) {
           // Nếu độ dài của inputValue là 2, thêm 6 phần tử null vào trước bien3
           bien3 = "zzzzzz"+inputValue.substring(0, inputValue.length);
           console.log("2222");
       } else if (inputValue.length == 4) {
           // Nếu độ dài của inputValue là 4, thêm 4 phần tử null vào trước bien3
           bien3 = "zzzz" + inputValue.substring(0, inputValue.length);
           console.log("444");
       } else if (inputValue.length == 6) {
           // Nếu độ dài của inputValue là 6, thêm 2 phần tử null vào trước bien3
           bien3 = "zz" + inputValue.substring(0, inputValue.length);
           console.log("666");
       }else if (inputValue.length == 8) {
        // Nếu độ dài của inputValue là 6, thêm 2 phần tử null vào trước bien3
           bien3 = inputValue.substring(0, inputValue.length);
           console.log("888");
      } else {
           // Nếu độ dài của inputValue là 8 hoặc hơn, chỉ sử dụng từ vị trí thứ 2 trở đi
           bien3 = inputValue.substring(2,10);
       }
   // const mangKyTu = mangm.split('');
    
   
    //const arr2 = [23, 48, 69, 79];
    
  //  console.log("kết quả sau 2 : "+kiemTraVaTaoMang(bbdn,arr2));
  
     
    
    //const mang8PhanTu = [1, 2, 3, 4, 5, 6, 7, 8];
    
   // console.log("Kết quả sau khi chuyển đổi mảng : " + man//gm);
   //console.log("dạng : "+ typeof(mang4PhanTu));
       var b1 = parseInt(bien41);
       
       const numberArrr = b1 / 80;
// console.log(`Số bị chia: ${numberArrr}`);

// Chuyển đổi số thành chuỗi
const numberStringWithDot = numberArrr.toString();

// Tách phần thập phân và phần nguyên
const [integerPart, decimalPart] = numberStringWithDot.split('.');

console.log(`Phần nguyên: ${integerPart}`);
console.log(`Phần thập phân: ${decimalPart || 0}`);

// Làm tròn phần thập phân và tính kết quả cuối cùng
 var kqq = Math.round(parseFloat(`0.${decimalPart || 0}`) * 80);
        var mucdo1;
        var nghia1;
       
      List64.forEach(item => {
           if (item.id === kqq) {
            const tby = document.getElementById('customerse-dayso').getElementsByTagName('tbody')[0];
tby.innerHTML = "";
            const nghia = item.nghia;
            nghia1 = item.nghia;
            const mucdo = item.mucdo;
            mucdo1 = item.mucdo;
            // Tạo một hàng mới trong bảng và thêm ý nghĩa và mức độ vào
            const newRow = document.createElement('tr');
            const nghiaCell = document.createElement('td');
            const mucdoCell = document.createElement('td');
            
            nghiaCell.textContent = nghia;
            mucdoCell.textContent = mucdo;
            
            newRow.appendChild(nghiaCell);
            newRow.appendChild(mucdoCell);
            
            const tbody = document.getElementById('customerse-dayso').getElementsByTagName('tbody')[0];
            tbody.appendChild(newRow);


        }
    });
    

// // Nếu tồn tại đối tượng đã chọn, thêm dòng dữ liệu vào bảng
// if (selectedItem) {
//     const tableBody = document.getElementById('customerse-dayso').getElementsByTagName('tbody')[0];
    
//     // Tạo một hàng mới
//     const newRow = tableBody.insertRow();
    
//     // Tạo các ô trong hàng mới và gán giá trị
//     const nghiaCell = newRow.insertCell();
//     const mucdoCell = newRow.insertCell();
    
//     nghiaCell.textContent = selectedItem.nghia;
//     mucdoCell.textContent = selectedItem.mucdo;
// }

    // Hiển thị giá trị trong console
       console.log("Kết qua : "+kqq);
        console.log("Biến 1: " + bien1);
       console.log("Biến 2: " + bien2);  
       var arrayFromString = bien3.split('');
       console.log(arrayFromString);
       var sum1 = calculateSum(bien1);
       var sum2 = calculateSum(bien2);
       var sumsdt = sum1+sum2;
       var dusdt = sumsdt%6;
       console.log(sumsdt);
       var Quec1 = sum1%8;
       var Quec2 = sum2%8;
       console.log('quẻ chủ 1 :'+ Quec1 + ' quẻ chủ 2 :'+ Quec2);
       
       
    const [result1, result2, result3,result4] = splitArray(dt);
    const [result5, result6] = splitArray(bien1);
    console.log(splitArray(bien1));
    console.log(splitArray(bien2));


   const BangCuoi = document.querySelector('#customerse-bangc tbody');
BangCuoi.innerHTML = "";

// Tạo đối tượng để lưu trữ dữ liệu theo từng loại vận
let dataByType = {
    "Sơ Niên Vận": [],
    "Tiền Vận": [],
    "Trung Vận": [],
    "Hậu Vận": []
};
// Sắp xếp dữ liệu vào đối tượng dataByType
QDich.forEach(function(item) {
     if (result1 == item.Stt && result2 == item.Stt && result3 == item.Stt&&result4==item.Stt) {
        dataByType["Tiền Vận"].push(item);
        dataByType["Sơ Niên Vận"].push(item);
        dataByType["Trung Vận"].push(item);
        dataByType["Hậu Vận"].push(item);
    }else if (result1 == item.Stt && result2 == item.Stt && result3 == item.Stt) {
        dataByType["Tiền Vận"].push(item);
        dataByType["Sơ Niên Vận"].push(item);
        dataByType["Trung Vận"].push(item);
       
    }else if (result2 == item.Stt && result3 == item.Stt&&result4==item.Stt) {
        dataByType["Tiền Vận"].push(item);
        dataByType["Trung Vận"].push(item);
        dataByType["Hậu Vận"].push(item);
    }else if (result3 == item.Stt && result4 == item.Stt) {
        // Xử lý trường hợp cả result2 và result3 đều khớp với item.Stt
        // Ở đây có thể đưa vào mảng Hậu Vận hoặc một mảng khác tùy vào nhu cầu của bạn
        // Ví dụ:
         dataByType["Hậu Vận"].push(item);
         dataByType["Trung Vận"].push(item);
        // hoặc
        // dataByType["SomeOtherType"].push(item);

    }else if (result2 == item.Stt && result3 == item.Stt) {
        dataByType["Tiền Vận"].push(item);
        dataByType["Trung Vận"].push(item);
    }else if (result1 == item.Stt && result2 == item.Stt) {
        dataByType["Tiền Vận"].push(item);
        dataByType["Sơ Niên Vận"].push(item);
    } else if (result3 == item.Stt) {
        dataByType["Trung Vận"].push(item);
    } else if (result4 == item.Stt) {
        dataByType["Hậu Vận"].push(item);
    } else if (result1 == item.Stt) {
        dataByType["Sơ Niên Vận"].push(item);
    } else if (result2 == item.Stt) {
        dataByType["Tiền Vận"].push(item);
    }
});

let k =0;
// Thêm dữ liệu từ đối tượng vào bảng theo thứ tự mong muốn
["Sơ Niên Vận", "Tiền Vận", "Trung Vận", "Hậu Vận"].forEach(function(type) {
    dataByType[type].forEach(function(item) {
        let newRow = `
            <tr>
                <td>${type}</td>
                <td></td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${mangmoi[k++].tn}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            </tr>`;
            
        BangCuoi.innerHTML += newRow;
    });
});

var ns = document.querySelector('#namsinh');
    
// Lấy nội dung của thẻ input
var nsinh = ns.value;

var now = new Date();
var currentYear = now.getFullYear();

var tuoi =  (currentYear-nsinh)+1;

const nguHanh =  document.querySelector('#nguhanhtb tbody');
nguHanh.innerHTML = "";
var vanht ;
if(tuoi<=24)
{
    vanht = "Sơ Niên Vận";
}else if(24<tuoi && tuoi<=34){
    vanht = "Tiền Vận";
}else if(34<tuoi && tuoi<=49){
    vanht="Trung Vận";
}else if(50<=tuoi){
    vanht="Hậu Vận";
}
var menh = findMenh(nsinh);
const arr = bien3.split('')
var menhc = menh;



var arrNew = snvan(arr,menhc);
console.log("MAng cuoi : "+arrNew);
//console.log("độ dài hàm snvan : "+ snvan(bien3,menhc).length);
//var colll = snvan(bien3,menhc);
//var resulttt = snvan(bien3, menhc);
//displayArrayElements(resulttt);
//console.log("kết quả sau : "+ snvan(bien3,menhc));
var dg = DienGiai(nsinh);
var row = document.createElement('tr');
row.innerHTML = `
            <td>${nsinh}</td>
            <td>${tuoi}</td>
            <td>${vanht}</td>
            <td>${menh}</td>
            <td>${dg}</td>
            <td>${nghia1}</td>
            <td>${mucdo1}</td>
            <td>${arrNew[0] + " - "+ arrNew[1]}</td>
            <td>${arrNew[2] + " - "+ arrNew[3]}</td>
            <td>${arrNew[4] + " - "+ arrNew[5]}</td>
            <td>${arrNew[6] + " - "+ arrNew[7]}</td>
            <td>${currentYear}</td>
        `;
        nguHanh.appendChild(row);

// hirenThiMenhCuoi(bien1,bien2,QDich);

       var newObject1 = {};

// Duyệt qua mảng Number và gán giá trị vào đối tượng mới theo điều kiện
Number.forEach(obj => {
  if (obj.id === Quec1) {
    newObject1.hao6 = obj.Hao3;
    newObject1.hao5 = obj.Hao2;
    newObject1.hao4 = obj.Hao1;
  }
  if (obj.id === Quec2) {
    newObject1.hao3 = obj.Hao3;
    newObject1.hao2 = obj.Hao2;
    newObject1.hao1 = obj.Hao1;
  }
});

console.log("Đối tượng mới: ", newObject1);
var newObject2 = {};
newObject2.hao1=newObject1.hao2;
newObject2.hao2=newObject1.hao3;
newObject2.hao3=newObject1.hao4;
newObject2.hao4=newObject1.hao3;
newObject2.hao5=newObject1.hao4;
newObject2.hao6=newObject1.hao5;
console.log("Đối tượng mới: ", newObject2);

// Khởi tạo một đối tượng mới
var newObject3 = {};

// Điều kiện để gán giá trị cho thuộc tính mới của đối tượng mới
if (dusdt !== 1 && dusdt !== 0) {
    newObject3.hao1 = newObject1.hao1;
} else {
    if (newObject1.hao1 === 0) {
        newObject3.hao1 = 1;
    } else {
        newObject3.hao1 = 0;
    }
}

if (dusdt !== 2 && dusdt !== 0) {
    newObject3.hao2 = newObject1.hao2;
} else {
    if (newObject1.hao2 === 0) {
        newObject3.hao2 = 1;
    } else {
        newObject3.hao2 = 0;
    }
}

if (dusdt !== 3 && dusdt !== 0) {
    newObject3.hao3 = newObject1.hao3;
} else {
    if (newObject1.hao3 === 0) {
        newObject3.hao3 = 1;
    } else {
        newObject3.hao3 = 0;
    }
}

if (dusdt !== 4 && dusdt !== 0) {
    newObject3.hao4 = newObject1.hao4;
} else {
    if (newObject1.hao4 === 0) {
        newObject3.hao4 = 1;
    } else {
        newObject3.hao4 = 0;
    }
}

if (dusdt !== 5 && dusdt !== 0) {
    newObject3.hao5 = newObject1.hao5;
} else {
    if (newObject1.hao5 === 0) {
        newObject3.hao5 = 1;
    } else {
        newObject3.hao5 = 0;
    }
}

if (dusdt !== 6 && dusdt !== 0) {
    newObject3.hao6 = newObject1.hao6;
} else {
    if (newObject1.hao6 === 0) {
        newObject3.hao6 = 1;
    } else {
        newObject3.hao6 = 0;

    }
}

   console.log("Đối tượng mới thứ 3: ", newObject3);
   
    var Queh1;
    if (newObject2.hao6 === 0 && newObject2.hao5 === 0 && newObject2.hao4 === 0) {
        Queh1=8;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 0 && newObject2.hao4 === 0) {
        Queh1=7;
    } else if (newObject2.hao6 === 0 && newObject2.hao5 === 1 && newObject2.hao4 === 0) {
        Queh1=6;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 1 && newObject2.hao4 === 0) {
        Queh1=5;
    } else if (newObject2.hao6 === 0 && newObject2.hao5 === 0 && newObject2.hao4 === 1) {
        Queh1=4;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 0 && newObject2.hao4 === 1) {
        Queh1=3;
    } else if (newObject2.hao6 === 0 && newObject2.hao5 === 1 && newObject2.hao4 === 1) {
        Queh1=2;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 1 && newObject2.hao4 === 1) {
        Queh1=1;
    } else {
        console.log("Sai");
    }
      console.log('quẻ hỗ 1 : '+Queh1);

      var Queh2 ;

      if (newObject2.hao3 === 0 && newObject2.hao2 === 0 && newObject2.hao1 === 0) {
        Queh2=8;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 0 && newObject2.hao1 === 0) {
        Queh2=7;
    } else if (newObject2.hao3 === 0 && newObject2.hao2 === 1 && newObject2.hao1 === 0) {
        Queh2=6;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 1 && newObject2.hao1 === 0) {
        Queh2=5;
    } else if (newObject2.hao3 === 0 && newObject2.hao2 === 0 && newObject2.hao1 === 1) {
        Queh2=4;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 0 && newObject2.hao1 === 1) {
        Queh2=3;
    } else if (newObject2.hao3 === 0 && newObject2.hao2 === 1 && newObject2.hao1 === 1) {
        Queh2=2;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 1 && newObject2.hao1 === 1) {
        Queh2=1;
    } else {
        console.log("Sai");
    }

    console.log('quẻ hỗ 2 : '+Queh2);

    var Queb1;
    if (newObject3.hao6 === 0 && newObject3.hao5 === 0 && newObject3.hao4 === 0) {
        Queb1=8;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 0 && newObject3.hao4 === 0) {
        Queb1=7;
    } else if (newObject3.hao6 === 0 && newObject3.hao5 === 1 && newObject3.hao4 === 0) {
        Queb1=6;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 1 && newObject3.hao4 === 0) {
        Queb1=5;
    } else if (newObject3.hao6 === 0 && newObject3.hao5 === 0 && newObject3.hao4 === 1) {
        Queb1=4;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 0 && newObject3.hao4 === 1) {
        Queb1=3;
    } else if (newObject3.hao6 === 0 && newObject3.hao5 === 1 && newObject3.hao4 === 1) {
        Queb1=2;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 1 && newObject3.hao4 === 1) {
        Queb1=1;
    } else {
        console.log("Sai");
    }
    console.log('quẻ b1 : '+Queb1);
     
    var Queb2;
    if (newObject3.hao3 === 0 && newObject3.hao2 === 0 && newObject3.hao1 === 0) {
        Queb2=8;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 0 && newObject3.hao1 === 0) {
        Queb2=7;
    } else if (newObject3.hao3 === 0 && newObject3.hao2 === 1 && newObject3.hao1 === 0) {
        Queb2=6;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 1 && newObject3.hao1 === 0) {
        Queb2=5;
    } else if (newObject3.hao3 === 0 && newObject3.hao2 === 0 && newObject3.hao1 === 1) {
        Queb2=4;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 0 && newObject3.hao1 === 1) {
        Queb2=3;
    } else if (newObject3.hao3 === 0 && newObject3.hao2 === 1 && newObject3.hao1 === 1) {
        Queb2=2;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 1 && newObject3.hao1 === 1) {
        Queb2=1;
    } else {
        console.log("Sai");
    }
    
     var q1 = Quec1.toString() + '/' + Quec2.toString();
     var q2 = Queh1.toString() + '/' + Queh2.toString();
     var q3 = Queb1.toString() + '/' + Queb2.toString();
     
    
     //const BangCuoi = document.querySelector('#customerse-bangc tbody');
    //  BangCuoi.innerHTML="";
     let quyChe = {
        quyCheChu: null,
        quyCheHo: null,
        quyCheBien: null
    };
    
    QDich.forEach(function (item) {
        if (q1 == item.Stt) {
            quyChe.quyCheChu = `
                <td></td>
                <td>Quẻ chủ</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td></td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
        }
    
        if (q2 == item.Stt) {
            quyChe.quyCheHo = `
            <td></td>
                <td>Quẻ hỗ</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td></td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
        }
        if (q3 == item.Stt) {
            quyChe.quyCheBien = `
            <td></td>
                <td>Quẻ biến</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td></td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
        }
    });
    
    // BangCuoi.innerHTML = "";
    
    const newRowChu = document.createElement("tr");
    newRowChu.innerHTML = quyChe.quyCheChu;
    BangCuoi.appendChild(newRowChu);
    
    const newRowHo = document.createElement("tr");
    newRowHo.innerHTML = quyChe.quyCheHo;
    BangCuoi.appendChild(newRowHo);
    
    const newRowBien = document.createElement("tr");
    newRowBien.innerHTML = quyChe.quyCheBien;
    BangCuoi.appendChild(newRowBien);
    
    }
    function calculateSum(str) {
        var sum = 0;
        for (var i = 0; i < str.length; i++) {
            sum += parseInt(str[i]);
        }
        return sum;
    }
    const Number=[
        {
            id : 0,
            Hao3: 0,
            Hao2: 0,
            Hao1: 0
        },{
            id : 1,
            Hao3: 1,
            Hao2: 1,
            Hao1: 1
        },{
            id : 2,
            Hao3: 0,
            Hao2: 1,
            Hao1: 1
        },{
            id : 3,
            Hao3: 1,
            Hao2: 0,
            Hao1: 1
        },{
            id : 4,
            Hao3: 0,
            Hao2: 0,
            Hao1: 1
        },{
            id : 5,
            Hao3: 1,
            Hao2: 1,
            Hao1: 0
        },{
            id : 6,
            Hao3: 0,
            Hao2: 1,
            Hao1: 0
        },{
            id : 7,
            Hao3: 1,
            Hao2: 0,
            Hao1: 0
        },{
            id : 8,
            Hao3: 0,
            Hao2: 0,
            Hao1: 0
        },{
            id : 9,
            Hao3: 1,
            Hao2: 1,
            Hao1: 1
        }
    ];
    const Namsinh = [
        { ns: 1900, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 1901, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 1902, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 1903, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 1904, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 1905, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 1906, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 1907, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 1908, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 1909, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 1910, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 1911, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 1912, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 1913, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 1914, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 1915, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 1916, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 1917, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 1918, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" },
        { ns: 1919, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" },
        { ns: 1920, mh: "Mộc", dd: "Thạch Lựu Mộc (Cây thạch lựu)" },
        { ns: 1921, mh: "Mộc", dd: "Thạch Lựu Mộc (Cây thạch lựu)" },
        { ns: 1922, mh: "Thủy", dd: "Đại Hải Thuỷ (Nước đại dương)" },
        { ns: 1923, mh: "Thủy", dd: "Đại Hải Thuỷ (Nước đại dương)" },
        { ns: 1924, mh: "Kim", dd: "Hải Trung Kim (Vàng dưới biển)" },
        { ns: 1925, mh: "Kim", dd: "Hải Trung Kim (Vàng dưới biển)" },
        { ns: 1926, mh: "Hỏa", dd: "Lư Trung Hoả (Lửa trong lò)" },
        { ns: 1927, mh: "Hỏa", dd: "Lư Trung Hoả (Lửa trong lò)" },
        { ns: 1928, mh: "Mộc", dd: "Đại Lâm Mộc (Cây trong rừng lớn)" },
        { ns: 1929, mh: "Mộc", dd: "Đại Lâm Mộc (Cây trong rừng lớn)" },
        { ns: 1930, mh: "Thổ", dd: "Lộ Bàng Thổ (Đất giữa đường)" },
        { ns: 1931, mh: "Thổ", dd: "Lộ Bàng Thổ (Đất giữa đường)" },
        { ns: 1932, mh: "Kim", dd: "Kiếm Phong Kim (Vàng đầu mũi kiếm)" },
        { ns: 1933, mh: "Kim", dd: "Kiếm Phong Kim (Vàng đầu mũi kiếm)" },
        { ns: 1934, mh: "Hỏa", dd: "Sơn Đầu Hoả (Lửa trên núi)" },
        { ns: 1935, mh: "Hỏa", dd: "Sơn Đầu Hoả (Lửa trên núi)" },
        { ns: 1936, mh: "Thủy", dd: "Giản Hạ Thuỷ (Nước dưới khe)" },
        { ns: 1937, mh: "Thủy", dd: "Giản Hạ Thuỷ (Nước dưới khe)" },
        { ns: 1938, mh: "Thổ", dd: "Thành Đầu Thổ (Đất trên thành)" },
        { ns: 1939, mh: "Thổ", dd: "Thành Đầu Thổ (Đất trên thành)" },
        { ns: 1940, mh: "Kim", dd: "Bạch Lạp Kim (Vàng trong nền rắn)" },
        { ns: 1941, mh: "Kim", dd: "Bạch Lạp Kim (Vàng trong nền rắn)" },
        { ns: 1942, mh: "Mộc", dd: "Dương Liễu Mộc (Cây dương liễu)" },
        { ns: 1943, mh: "Mộc", dd: "Dương Liễu Mộc (Cây dương liễu)" },
        { ns: 1944, mh: "Thủy", dd: "Tuyền Trung Thuỷ (Nước suối giữa dòng)" },
        { ns: 1945, mh: "Thủy", dd: "Tuyền Trung Thuỷ (Nước suối giữa dòng)" },
        { ns: 1946, mh: "Thổ", dd: "Ốc Thượng Thổ (Đất trên nốc nhà)" },
        { ns: 1947, mh: "Thổ", dd: "Ốc Thượng Thổ (Đất trên nốc nhà)" },
        { ns: 1948, mh: "Hỏa", dd: "Tích Lịch Hoả (Lửa sấm sét)" },
        { ns: 1949, mh: "Hỏa", dd: "Tích Lịch Hoả (Lửa sấm sét)" },
        { ns: 1950, mh: "Mộc", dd: "Tùng Bách Mộc (Cây tùng bách)" },
        { ns: 1951, mh: "Mộc", dd: "Tùng Bách Mộc (Cây tùng bách)" },
        { ns: 1952, mh: "Thủy", dd: "Trường Lưu Thuỷ (Dòng nước lớn)" },
        { ns: 1953, mh: "Thủy", dd: "Trường Lưu Thuỷ (Dòng nước lớn)" },
        { ns: 1954, mh: "Kim", dd: "Sa Trung Kim (Vàng trong cát)" },
        { ns: 1955, mh: "Kim", dd: "Sa Trung Kim (Vàng trong cát)" },
        { ns: 1956, mh: "Hỏa", dd: "Sơn Hạ Hoả (Lửa dưới chân núi)" },
        { ns: 1957, mh: "Hỏa", dd: "Sơn Hạ Hoả (Lửa dưới chân núi)" },
        { ns: 1958, mh: "Mộc", dd: "Bình Địa Mộc (Cây ở đồng bằng)" },
        { ns: 1959, mh: "Mộc", dd: "Bình Địa Mộc (Cây ở đồng bằng)" },
        { ns: 1960, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 1961, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 1962, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 1963, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 1964, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 1965, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 1966, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 1967, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 1968, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 1969, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 1970, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 1971, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 1972, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 1973, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 1974, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 1975, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 1976, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 1977, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 1978, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" },
        { ns: 1979, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" },
        { ns: 1980, mh: "Mộc", dd: "Thạch Lựu Mộc (Cây thạch lựu)" },
        { ns: 1981, mh: "Mộc", dd: "Thạch Lựu Mộc (Cây thạch lựu)" },
        { ns: 1982, mh: "Thủy", dd: "Đại Hải Thuỷ (Nước đại dương)" },
        { ns: 1983, mh: "Thủy", dd: "Đại Hải Thuỷ (Nước đại dương)" },
        { ns: 1984, mh: "Kim", dd: "Hải Trung Kim (Vàng dưới biển)" },
        { ns: 1985, mh: "Kim", dd: "Hải Trung Kim (Vàng dưới biển)" },
        { ns: 1986, mh: "Hỏa", dd: "Lư Trung Hoả (Lửa trong lò)" },
        { ns: 1987, mh: "Hỏa", dd: "Lư Trung Hoả (Lửa trong lò)" },
        { ns: 1988, mh: "Mộc", dd: "Đại Lâm Mộc (Cây trong rừng lớn)" },
        { ns: 1989, mh: "Mộc", dd: "Đại Lâm Mộc (Cây trong rừng lớn)" },
        { ns: 1990, mh: "Thổ", dd: "Lộ Bàng Thổ (Đất giữa đường)" },
        { ns: 1991, mh: "Thổ", dd: "Lộ Bàng Thổ (Đất giữa đường)" },
        { ns: 1992, mh: "Kim", dd: "Kiếm Phong Kim (Vàng đầu mũi kiếm)" },
        { ns: 1993, mh: "Kim", dd: "Kiếm Phong Kim (Vàng đầu mũi kiếm)" },
        { ns: 1994, mh: "Hỏa", dd: "Sơn Đầu Hoả (Lửa trên núi)" },
        { ns: 1995, mh: "Hỏa", dd: "Sơn Đầu Hoả (Lửa trên núi)" },
        { ns: 1996, mh: "Thủy", dd: "Giản Hạ Thuỷ (Nước dưới khe)" },
        { ns: 1997, mh: "Thủy", dd: "Giản Hạ Thuỷ (Nước dưới khe)" },
        { ns: 1998, mh: "Thổ", dd: "Thành Đầu Thổ (Đất trên thành)" },
        { ns: 1999, mh: "Thổ", dd: "Thành Đầu Thổ (Đất trên thành)" },
        { ns: 2000, mh: "Kim", dd: "Bạch Lạp Kim (Vàng trong nền rắn)" },
        { ns: 2001, mh: "Kim", dd: "Bạch Lạp Kim (Vàng trong nền rắn)" },
        { ns: 2002, mh: "Mộc", dd: "Dương Liễu Mộc (Cây dương liễu)" },
        { ns: 2003, mh: "Mộc", dd: "Dương Liễu Mộc (Cây dương liễu)" },
        { ns: 2004, mh: "Thủy", dd: "Tuyền Trung Thuỷ (Nước suối giữa dòng)" },
        { ns: 2005, mh: "Thủy", dd: "Tuyền Trung Thuỷ (Nước suối giữa dòng)" },
        { ns: 2006, mh: "Thổ", dd: "Ốc Thượng Thổ (Đất trên nốc nhà)" },
        { ns: 2007, mh: "Thổ", dd: "Ốc Thượng Thổ (Đất trên nốc nhà)" },
        { ns: 2008, mh: "Hỏa", dd: "Tích Lịch Hoả (Lửa sấm sét)" },
        { ns: 2009, mh: "Hỏa", dd: "Tích Lịch Hoả (Lửa sấm sét)" },
        { ns: 2010, mh: "Mộc", dd: "Tùng Bách Mộc (Cây tùng bách)" },
        { ns: 2011, mh: "Mộc", dd: "Tùng Bách Mộc (Cây tùng bách)" },
        { ns: 2012, mh: "Thủy", dd: "Trường Lưu Thuỷ (Dòng nước lớn)" },
        { ns: 2013, mh: "Thủy", dd: "Trường Lưu Thuỷ (Dòng nước lớn)" },
        { ns: 2014, mh: "Kim", dd: "Sa Trung Kim (Vàng trong cát)" },
        { ns: 2015, mh: "Kim", dd: "Sa Trung Kim (Vàng trong cát)" },
        { ns: 2016, mh: "Hỏa", dd: "Sơn Hạ Hoả (Lửa dưới chân núi)" },
        { ns: 2017, mh: "Hỏa", dd: "Sơn Hạ Hoả (Lửa dưới chân núi)" },
        { ns: 2018, mh: "Mộc", dd: "Bình Địa Mộc (Cây ở đồng bằng)" },
        { ns: 2019, mh: "Mộc", dd: "Bình Địa Mộc (Cây ở đồng bằng)" },
        { ns: 2020, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 2021, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 2022, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 2023, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 2024, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 2025, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 2026, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 2027, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 2028, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 2029, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 2030, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 2031, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 2032, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 2033, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 2034, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 2035, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 2036, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 2037, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 2038, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" },
        { ns: 2039, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" },
        { ns: 2040, mh: "Mộc", dd: "Thạch Lựu Mộc (Cây thạch lựu)" },
        { ns: 2041, mh: "Mộc", dd: "Thạch Lựu Mộc (Cây thạch lựu)" },
        { ns: 2042, mh: "Thủy", dd: "Đại Hải Thuỷ (Nước đại dương)" },
        { ns: 2043, mh: "Thủy", dd: "Đại Hải Thuỷ (Nước đại dương)" },
        { ns: 2044, mh: "Kim", dd: "Hải Trung Kim (Vàng dưới biển)" },
        { ns: 2045, mh: "Kim", dd: "Hải Trung Kim (Vàng dưới biển)" },
        { ns: 2046, mh: "Hỏa", dd: "Lư Trung Hoả (Lửa trong lò)" },
        { ns: 2047, mh: "Hỏa", dd: "Lư Trung Hoả (Lửa trong lò)" },
        { ns: 2048, mh: "Mộc", dd: "Đại Lâm Mộc (Cây trong rừng lớn)" },
        { ns: 2049, mh: "Mộc", dd: "Đại Lâm Mộc (Cây trong rừng lớn)" },
        { ns: 2050, mh: "Thổ", dd: "Lộ Bàng Thổ (Đất giữa đường)" },
        { ns: 2051, mh: "Thổ", dd: "Lộ Bàng Thổ (Đất giữa đường)" },
        { ns: 2052, mh: "Kim", dd: "Kiếm Phong Kim (Vàng đầu mũi kiếm)" },
        { ns: 2053, mh: "Kim", dd: "Kiếm Phong Kim (Vàng đầu mũi kiếm)" },
        { ns: 2054, mh: "Hỏa", dd: "Sơn Đầu Hoả (Lửa trên núi)" },
        { ns: 2055, mh: "Hỏa", dd: "Sơn Đầu Hoả (Lửa trên núi)" },
        { ns: 2056, mh: "Thủy", dd: "Giản Hạ Thuỷ (Nước dưới khe)" },
        { ns: 2057, mh: "Thủy", dd: "Giản Hạ Thuỷ (Nước dưới khe)" },
        { ns: 2058, mh: "Thổ", dd: "Thành Đầu Thổ (Đất trên thành)" },
        { ns: 2059, mh: "Thổ", dd: "Thành Đầu Thổ (Đất trên thành)" },
        { ns: 2060, mh: "Kim", dd: "Bạch Lạp Kim (Vàng trong nền rắn)" },
        { ns: 2061, mh: "Kim", dd: "Bạch Lạp Kim (Vàng trong nền rắn)" },
        { ns: 2062, mh: "Mộc", dd: "Dương Liễu Mộc (Cây dương liễu)" },
        { ns: 2063, mh: "Mộc", dd: "Dương Liễu Mộc (Cây dương liễu)" },
        { ns: 2064, mh: "Thủy", dd: "Tuyền Trung Thuỷ (Nước suối giữa dòng)" },
        { ns: 2065, mh: "Thủy", dd: "Tuyền Trung Thuỷ (Nước suối giữa dòng)" },
        { ns: 2066, mh: "Thổ", dd: "Ốc Thượng Thổ (Đất trên nốc nhà)" },
        { ns: 2067, mh: "Thổ", dd: "Ốc Thượng Thổ (Đất trên nốc nhà)" },
        { ns: 2068, mh: "Hỏa", dd: "Tích Lịch Hoả (Lửa sấm sét)" },
        { ns: 2069, mh: "Hỏa", dd: "Tích Lịch Hoả (Lửa sấm sét)" },
        { ns: 2070, mh: "Mộc", dd: "Tùng Bách Mộc (Cây tùng bách)" },
        { ns: 2071, mh: "Mộc", dd: "Tùng Bách Mộc (Cây tùng bách)" },
        { ns: 2072, mh: "Thủy", dd: "Trường Lưu Thuỷ (Dòng nước lớn)" },
        { ns: 2073, mh: "Thủy", dd: "Trường Lưu Thuỷ (Dòng nước lớn)" },
        { ns: 2074, mh: "Kim", dd: "Sa Trung Kim (Vàng trong cát)" },
        { ns: 2075, mh: "Kim", dd: "Sa Trung Kim (Vàng trong cát)" },
        { ns: 2076, mh: "Hỏa", dd: "Sơn Hạ Hoả (Lửa dưới chân núi)" },
        { ns: 2077, mh: "Hỏa", dd: "Sơn Hạ Hoả (Lửa dưới chân núi)" },
        { ns: 2078, mh: "Mộc", dd: "Bình Địa Mộc (Cây ở đồng bằng)" },
        { ns: 2079, mh: "Mộc", dd: "Bình Địa Mộc (Cây ở đồng bằng)" },
        { ns: 2080, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 2081, mh: "Thổ", dd: "Bích Thượng Thổ (Đất trên vách)" },
        { ns: 2082, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 2083, mh: "Kim", dd: "Kim Bạch Kim (Vàng pha bạch kim)" },
        { ns: 2084, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 2085, mh: "Hỏa", dd: "Phúc Đăng Hoả (Lửa ngọn đèn)" },
        { ns: 2086, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 2087, mh: "Thủy", dd: "Thiên Hà Thuỷ (Nước trên trời)" },
        { ns: 2088, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 2089, mh: "Thổ", dd: "Đại Trạch Thổ (Đất thuộc một khu lớn)" },
        { ns: 2090, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 2091, mh: "Kim", dd: "Thoa Xuyên Kim (Vàng trang sức)" },
        { ns: 2092, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 2093, mh: "Mộc", dd: "Tang Đố Mộc (Gỗ cây dâu)" },
        { ns: 2094, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 2095, mh: "Thủy", dd: "Đại Khê Thuỷ (Nước dưới khe lớn)" },
        { ns: 2096, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 2097, mh: "Thổ", dd: "Sa Trung Thổ (Đất lẫn trong cát)" },
        { ns: 2098, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" },
        { ns: 2099, mh: "Hỏa", dd: "Thiên Thượng Hoả (Lửa trên trời)" }
        //Thêm dữ liệu cho các dòng tiếp theo ở đây
    ];
    const nh = [
         {
            id :  1,
            menh : "Kim",
            sh : [1,6,0,5,4,9]
         },
         {
            id :  2,
            menh : "Mộc",
            sh : [1,6,2,7,3,8]
         },
         {
            id :  3,
            menh : "Thủy",
            sh : [1,6,3,8,4,9]
         },
         {
            id :  4,
            menh : "Hỏa",
            sh : [2,7,0,5,3,8]
         },
         {
            id :  5,
            menh : "Thổ",
            sh : [2,7,0,5,4,9]
         }
    ];
    DataMoc = [
            {
                id: 0,
                ynghia: "Chủ khắc"
            },
            {
                id: 1,
                ynghia: "Vượng của chủ"
            },
            {
                id: 2,
                ynghia: "Lộc của chủ"
            },
            {
                id: 3,
                ynghia: "Bạn của chủ"
            },
            {
                id: 4,
                ynghia: "Khắc chủ"
            },
            {
                id: 5,
                ynghia: "Chủ khắc"
            },
            {
                id: 6,
                ynghia: "Vượng của chủ"
            },
            {
                id: 7,
                ynghia: "Lộc của chủ"
            },
            {
                id: 8,
                ynghia: "Bạn của chủ"
            },
            {
                id: 9,
                ynghia: "Khắc chủ"
            }
    ];
    DataKim = [
        {
            id: 0,
            ynghia: "Vượng của chủ"
        },{
            id: 1,
            ynghia: "Lộc của chủ"
        },
        {
            id: 2,
            ynghia: "Khắc chủ"
        },
        {
            id: 3,
            ynghia: "Chủ khắc"
        },
        {
            id: 4,
            ynghia: "Bạn của chủ"
        },
        {
            id: 5,
            ynghia: "Vượng của chủ"
        },
        {
            id: 6,
            ynghia: "Lộc của chủ"
        },
        {
            id: 7,
            ynghia: "Khắc chủ"
        },
        {
            id: 8,
            ynghia: "Chủ khắc"
        },
        {
            id: 9,
            ynghia: "Bạn của chủ"
        }
    ];
    DataThuy = [
        {
            id: 0,
            ynghia: "Khắc chủ"
        },{
            id: 1,
            ynghia: "Bạn của chủ"
        },
        {
            id: 2,
            ynghia: "Chủ khắc"
        },
        {
            id: 3,
            ynghia: "Lộc của chủ"
        },
        {
            id: 4,
            ynghia: "Vượng của chủ"
        },
        {
            id: 5,
            ynghia: "Khắc chủ"
        },
        {
            id: 6,
            ynghia: "Bạn của chủ"
        },
        {
            id: 7,
            ynghia: "Chủ khắc"
        },
        {
            id: 8,
            ynghia: "Lộc của chủ"
        },
        {
            id: 9,
            ynghia: "Vượng của chủ"
        }
    ];
    DataHoa = [
        
        {
            id: 0,
            ynghia: "Lộc của chủ"
        },{
            id: 1,
            ynghia: "Khắc chủ"
        },
        {
            id: 2,
            ynghia: "Bạn của chủ"
        },
        {
            id: 3,
            ynghia: "Vượng của chủ"
        },
        {
            id: 4,
            ynghia: "Chủ khắc"
        },
        {
            id: 5,
            ynghia: "Lộc của chủ"
        },
        {
            id: 6,
            ynghia: "Khắc chủ"
        },
        {
            id: 7,
            ynghia: "Bạn của chủ"
        },
        {
            id: 8,
            ynghia: "Vượng của chủ"
        },
        {
            id: 9,
            ynghia: "Chủ khắc"
        }
    ];
    DataTho = [
        
        {
            id: 0,
            ynghia: "Bạn của chủ"
        },{
            id: 1,
            ynghia: "Chủ khắc"
        },
        {
            id: 2,
            ynghia: "Vượng của chủ"
        },
        {
            id: 3,
            ynghia: "Khắc chủ"
        },
        {
            id: 4,
            ynghia: "Lộc của chủ"
        },
        {
            id: 5,
            ynghia: "Bạn của chủ"
        },
        {
            id: 6,
            ynghia: "Chủ khắc"
        },
        {
            id: 7,
            ynghia: "Vượng của chủ"
        },
        {
            id: 8,
            ynghia: "Khắc chủ"
        },
        {
            id: 9,
            ynghia: "Lộc của chủ"
        }
    ];


   