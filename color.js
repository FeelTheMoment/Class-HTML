var Links = {
              setColor:function(color){
            var alist = document.querySelectorAll('a');
            var i = 0;
            while(i < alist.length){
              alist[i].style.color = color;
              i = i + 1;
            }
          }
        }
        var Body = {
        	setColor:function(color){
          		document.querySelector('body').style.color = color;
        	},
            setBackgroundColor:function(color){
          		document.querySelector('body').style.backgroundColor = color;
        	}
        }
        
       
        function nightDayHandler(self){
          var target = document.querySelector('body');
          if(self.value === 'night'){
            target.style.backgroundColor = 'black';
            target.style.color = 'white';
            Body.setBackgroundColor('black');
            Body.setColor('white');
            self.value = 'day';
            
            Links.setColor('powderblue');
          } else {
            target.style.backgroundColor = 'white';
            target.style.color = 'black';
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value = 'night';
            
            Links.setColor('blue');
          }
        }

      fetch('list').then(function(response){
    response.text().then(function(text){
      var items = text.split(',');
      var i = 0;
      var tags = '';
      while(i<items.length){
        var item = items[i];
        item = item.trim();
        var tag = '<li><a href="#!'+item+'" onclick="fetchPage(\''+item+'\')">'+item+'</a></li>';
        tags = tags + tag;
        i = i + 1;
      }
      document.querySelector('#nav').innerHTML = tags;
    })
  });
