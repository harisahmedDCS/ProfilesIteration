const data=[
	{
		name:'John Doe',
		age:32,
		gender:'male',
		lookingfor:'female',
		location:'Boston,Ma',
		image:'https://randomuser.me/api/portraits/men/33.jpg'
	},
	{
		name:'Huxaifa',
		age:20,
		gender:'male',
		lookingfor:'female',
		location:'Boston,Ma',
		image:'https://randomuser.me/api/portraits/women/33.jpg'
	},
	{
		name:'Saqib',
		age:22,
		gender:'male',
		lookingfor:'female',
		location:'Boston,Ma',
		image:'https://randomuser.me/api/portraits/women/34.jpg'
	}

];
const profiles=profileIterator(data);
//Next Event
nextProfile();
document.getElementById('next').addEventListener('click',nextProfile);
//next Profile Display
	function nextProfile(){
	const currentProfile=profiles.next().value;
	if(currentProfile!==undefined){
	document.getElementById('profileDisplay').innerHTML=`
	<ul class="list-group">
		<li class="list-group-item">Name:${currentProfile.name}</li>
		<li class="list-group-item">Age:${currentProfile.age}</li>
		<li class="list-group-item">Location:${currentProfile.location}</li>
		<li class="list-group-item">Preferences:${currentProfile.gender}
		looking for ${currentProfile.lookingfor}</li>
	</ul>
	`;
	document.getElementById('imageDisplay').innerHTML=`<img src="${currentProfile.image}">`
	}
	else{
		window.location.reload();
	}
}
//profile iterator
function profileIterator(profiles){
   let nextIndex=0;
   return{
	   next:function(){
		   return nextIndex <profiles.length?
		   {value:profiles[nextIndex++],done:false}:
		   {done:true}
	   }
   };
}









