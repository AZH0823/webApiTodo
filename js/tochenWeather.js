$(function(){
    $.ajax({
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-583BC175-7AA0-4485-B5DE-D60522696CEB&format=JSON&locationName=%E5%9C%9F%E5%9F%8E%E5%8D%80&elementName=T',
        method:"GET",
        dataType:"JSON",
        // data: post 才會用到
        
        success:function(res){
          // console.log(res)
          console.log(res.records.locations[0]);
          
          // 土城區溫度
          let tempture = res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value;

          // 新北市
          $('#city_name').html(res.records.locations[0].locationsName)

          // 土城區
          $('#district').html(res.records.locations[0].location[0].locationName)

          // 土城區溫度
          $('#tempture').html(tempture + "&#176;");
          let cardHeader = ''
          // 每周Data
          const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

          // 土城一天某小時的溫度 time[0]

          // HTML TEMP Template 
          // <div class="d-flex flex-column block first-block">
          //   <small class="text-muted mb-0">MON</small>
          //   <div class="text-center"><img class="symbol-img" src="https://i.imgur.com/BeWfUuG.png"></div>
          //   <h6><strong>-30&#176;</strong></h6>
          // </div>


          const html1 = `<div class="d-flex flex-column block"><small class="text-muted mb-0">`;
          const html2 = `</small><div class="text-center"><img class="symbol-img" src="`;
          const html3 = `"></div><h6><strong>`;
          const html4 = `&#176;</strong></h6></div>`;
          let week_html = '';
          console.log(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value);
          
          let weekidx = 0 
          for(let i = 0; i < 10;i+=2){
            let degree = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
            console.log(degree)
            icon = (degree > 18) ? "https://i.imgur.com/Shrg84B.png" : "https://i.imgur.com/BeWfUuG.png";

            week_html +=`<div class="d-flex flex-column block first-block">
                <small  small class="text-muted mb-0">${week[weekidx]}</small>
                <div class="text-center"><img class="symbol-img" src="${icon}"></div>
                <h6><strong>${degree}&#176;</strong></h6>
              </div>`
            weekidx++
          }
          console.log(week_html)
          $('#weekday').html(week_html);
        },
        error:function(err){console.log(err)},
      });
})