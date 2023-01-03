$(function(){
    $.ajax({
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-583BC175-7AA0-4485-B5DE-D60522696CEB&format=JSON&locationName=%E5%9C%9F%E5%9F%8E%E5%8D%80&elementName=T',
        method:"GET",
        dataType:"JSON",
        // data: post 才會用到
        
        success:function(res){
          console.log(res.result.fields)
        },
        error:function(err){console.log(err)},
      });
})