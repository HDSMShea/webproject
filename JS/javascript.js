//The list of GPUs with IDs for referencing in functions
let GPUlist = [{id: 0, title: "EVGA GeForce RTX 3080 FTW3 Ultra Gaming LHR Graphics Card 10GB GDDR6X, PCIE 4.0, 3X Fan", price: "$1994", image_url: "MEDIAtwo/gpu0.jpg"},
				 {id: 1, title: "EVGA GeForce RTX 3050 XC Graphics Card 8GB GDDR6 PCIe 4.0 Dual Fan", price: "$499", image_url: "MEDIAtwo/gpu1.jpg"},
				 {id: 2, title: "Sapphire Nitro+ AMD Radeon RX 6950 XT Gaming OC Graphics Card 16GB GDDR6, 3XFan", price: "$2011", image_url: "MEDIAtwo/gpu2.jpg"},
			     {id: 3, title: "Gigabyte GeForce RTX 3060 Gaming OC 2.0 LHR 12GB GDDR6, PCIE 4.0, 3X Fan", price: "$67899", image_url: "MEDIAtwo/gpu3.jpg"},
			     {id: 4, title: " MSI GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X, PCIE 4.0, Triple Fan", price: "$2199", image_url: "MEDIAtwo/gpu4.jpg"},
				];



//List of comments for listing in the load comment function				
let commentList = [{name: "Fred", comment: "Recommended, quality GPU"},
				{name: "Terry", comment: "I don't like this GPU it doesnt fit in my case"},
				{name: "Joe", comment: "Love this gpu, so much performance!"},
				];
				
// setting the indexes for slide shows 
				let autoIndex=0;			
				let manualIndex=0;

//executing the load comments function when JS loads
loadComments();

//nav functions for opening and closing the curtain nav 
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";
	}
	
	
	
function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";
	}


// Referenced in the returning of filtered products(filtered list)	
function myFunction() {

	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

//This is the next button referenced for the manual slide show
function nextGPU() {
	//increases manual index
	if (manualIndex<GPUlist.length-1){
		manualIndex++;
	}
	//defaults to first in array
	else {
		manualIndex=0;
	}
	//returns the corrosponding indexed product title and image url
	document.getElementById("manual-slide-title").innerHTML=GPUlist[manualIndex].title;
	document.getElementById("manual-slide-image").src=GPUlist[manualIndex].image_url;

}



//This is the previous button referenced for the manual slide show
function previousGPU() {
	//if manual index greater than 0 decreases the index by 1
if (manualIndex>0){
		manualIndex--;
	}
	//else return to previous value in index field
	else {
		manualIndex=GPUlist.length-1;
	}
	document.getElementById("manual-slide-title").innerHTML=GPUlist[manualIndex].title;
	document.getElementById("manual-slide-image").src=GPUlist[manualIndex].image_url;



	
}

//auto slideshow function
function autoSlideShow(){
	//changes the autoindex
	
	

	if (autoIndex<GPUlist.length-1){
		autoIndex++;
	}
	else 
	{
		autoIndex=0;
	}
	//changes the referenced title and url
	document.getElementById("auto-slide-title").innerHTML=GPUlist[autoIndex].title;
	document.getElementById("auto-slide-image").src=GPUlist[autoIndex].image_url;
	//wait 2 seconds
	setTimeout(autoSlideShow, 2000);

}

//executing the autoslide function on JS load
autoSlideShow();


//populate the select menu
function loadGPUs(){
//find the select element
//loop through the movies in the list
let GPUSelect=document.getElementById("myGPUList");
for (var i=0;0<GPUlist.length;i++){
	//extract title
	//creat option
	let optionNode= document.createElement("option");
	//assign the option content
	optionNode.value=GPUlist[i].id.toString();
	optionNode.textContent=GPUlist[i].title.toString();
	//append this option to the select element
	GPUSelect.appendChild(optionNode);
}

}
//execute the prior function on JS load
loadGPUs();


function displayGPU() {
	//Get the selected movie "option value"
	let selectedGPUindex = document.getElementById("myGPUList").value;
	document.getElementById("selectedGPUtitle").innerHTML = GPUlist[selectedGPUindex].title;
	document.getElementById("selectedGPUprice").innerHTML = GPUlist[selectedGPUindex].price;
	document.getElementById("selectedGPUurl").src = GPUlist[selectedGPUindex].image_url;
	}

	function AddItemToList() {
		//Get entered item data
		let newItemTitle = document.getElementById("GPU-title").value;
		let newItemprice = document.getElementById("GPU-price").value;
		let newItemUrl = document.getElementById("GPU-image-url").value;
		let newId = GPUlist.length;
		//Validate input before adding new item
		if ((newItemTitle == "") || (newItemprice == "") || (newItemUrl == "")) {
		alert("ERROR. DATA IS INCOMPLETE!");
		} else {
		//Add a new item
		GPUlist.push({id: newId, title: newItemTitle, price: parseInt(newItemprice), image_url: newItemUrl});
		alert("NEW ITEM ADDED SUCCESSFULLY!");
		//Reload the drop-down list
		//Remove all current options
		document.getElementById("myGPUList").options.length = 0;
		document.getElementById("GPU-image-url").value = "";
		document.getElementById("GPU-title").value = "";
		document.getElementById("GPU-price").value = "";
		//Load updated options
		loadGPUs();
		//Empty the inputs
		}
		}


function loadComments() {


	//Loop through all comments in the array "allComments"
	for (var i=0; i < commentList.length; i++) {
	let name = commentList[i].name;
	let comment = commentList[i].comment;
	//
	//Create a new HTML node/element <P> to display this comment
	let node = document.createElement("P");
	let textnode = document.createTextNode(name + ": " + comment);
	node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)
	let parrent_node = document.getElementById("comment-list");//Get the id of parent node "commentlist"
	parrent_node.appendChild(node);//Append the above child HTML node to the parent node
	}
	}



function addComment() {
	
	//Get entered value/data by user
	let enteredCommentName = document.getElementById("comment_name").value;
	let enteredCommentText = document.getElementById("comment_text").value;
	//Add this new comment to the array
	commentList.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Thank you for your comment!");
	//Display this new comment on HTML page
	//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
	let node = document.createElement("P");
//Create a new TextNode
let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
//Append the content (created TextNode) to the HTML Node (child)
node.appendChild(textnode);
//Get the id of parent node "comment-list"
let parrent_node = document.getElementById("comment-list");
//Append the above child HTML node to the parent node
parrent_node.appendChild(node);
//Clear comment box
document.getElementById("comment_name").value = "";
document.getElementById("comment_text").value = "";
	} 

addComment();	
