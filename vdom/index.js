/** @jsx h */

function h(type, props, ...children){
  return {type, props, children};
}

function createElement(node){

	if (typeof node === 'string'){
  	return document.createTextNode(node)
  }
  
  const $el = document.createElement(node.type)
  if (node.props) Object.keys(node.props).forEach(key => $el.setAttribute(key, node.props[key]))
  
  node.children
  	.map(createElement)
    .forEach($el.appendChild.bind($el))
  
	return $el 
}

function changed(node1, node2) {
	return typeof node1 !== typeof node2 || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type
}

function updateProps($parent, newNode, oldNode, index = 0) {
	const newProps = newNode.props
  const oldProps = oldNode.props
  
	if (!oldProps && newProps) {
  	return Object.keys(newProps).forEach(key => $parent.childNodes[index].setAttribute(key, newProps[key]))
	}
  
  if (oldProps && !newProps) {
  	return Object.keys(oldProps).forEach(key => $parent.childNodes[index].removeAttribute(key))
  } 
  
  if (Object.keys(newProps).length !== Object.keys(oldProps).length) {
  	
    Object.keys(newProps).forEach(key => { 
    	if (!oldProps[key] || (oldNode.props[key] && newProps[key] !== oldNode.props[key])) {
      	$parent.childNodes[index].setAttribute(key, newProps[key])
      }
    })
    
    Object.keys(oldProps).forEach(key => { if (!newProps[key]) $parent.childNodes[index].removeAttribute(key) })
  }
}

function updateElement($parent, newNode, oldNode, index = 0){
	
  if (!oldNode){
    $parent.appendChild(createElement(newNode))
  } else if (!newNode){
  	$parent.removeChild(
    	$parent.childNodes[index]
    )
  } else if (changed(newNode, oldNode)){
  	$parent.replaceChild(
    	createElement(newNode),
      $parent.childNodes[index]
    )
  } else  if (newNode.type){
  	if (newNode.props || oldNode.props) updateProps($parent, newNode, oldNode, index)
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
  
  	for(let i=0; i < newLength || i < oldLength ; i++) {
    	updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i)
    }
  }
}

const a = (
	<ul>
    <li class="item" src="monSrc">List Items</li>
    <li style="background:red">List Items 2</li>
  </ul>
)

const b = (
	<ul>
    <li class="item2">List Items</li>
  </ul>
)

const $app = document.getElementById('app');
const reload = document.getElementById('reload');

reload.addEventListener('click', () => {
	updateElement($app, b, a)
})

$app.appendChild(createElement(a));