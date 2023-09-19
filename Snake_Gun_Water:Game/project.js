
  let arr=["Water","Snake","Gun"];
  let r=1;
  let counter=0;
  while(r<=3){
      let choose=prompt("Water,Snake or Gun?");
      const randomIndex = Math.floor(Math.random() * arr.length);
      if((choose=="Snake" && arr[randomIndex]=="Water")||(choose=="Water" && arr[randomIndex]=="Gun") || (choose=="Gun" && arr[randomIndex]=="Snake") ){
          counter++;
          alert("You are winner");
      }
      else{
          alert("Computer wins");
      }
      round++;
  }
  if (counter>1){
      alert("You are winner with total points"+counter);
  }
  else{
      alert("You are looser with total points "+counter);
  }