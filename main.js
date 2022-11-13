let attributeLinks = document.getElementsByClassName('attribute-links')
let attributeContents = document.getElementsByClassName('attribute-contents')

function openAttribute(attributeName){
    for(attributeLink of attributeLinks){
        attributeLink.classList.remove('active-link')
    }
    for(attributeContent of attributeContents){
        attributeContent.classList.remove('active-attribute')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(attributeName).classList.add('active-attribute')

}

function submitFunc(){
    prompt = prompt("Lets hope that I will be another star joining Starlabs", "It's a yes from us");
  }

