class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}
class bst{
    constructor()
    {
        this.root=null
    }
    delete(target){
        this.root=this.deletHelper(this.root,target)
    }
    deletHelper(root,target){
        if(!root)
        {
            return null
        }
        if(target<root.value)
        {
            root.left=this.deletHelper(root.left,target)
        }else if(target>root.value)
        {
            root.right=this.deletHelper(root.right,target)
        }else{
            if(!root.left&&!root.right)
            {
                return null
            }
            if(!root.left)
            {
                return root.right
            }
            if(!root.right)
            {
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deletHelper(root.right,root.value)
        }
        return root
    }
    min(root){
        if(!root.left)
        {
            console.log(root.value);
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    insert(value)
    {
        let node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
            this.insertHelper(this.root,node)
        }
    }

    insertHelper(root,node)
    {
        if(node.value<root.value)
        {
            if(!root.left)
            {
                root.left=node
            }
            else{
                return this.insertHelper(root.left,node)
            }
        }else{
            if(!root.right)
            {
                root.right=node
            }
            else{
                return this.insertHelper(root.right,node)
            }
        }
    }
    bfs(){
        let queue=[]
        queue.push(this.root)
        while(queue.length)
        {
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left)
            {
                queue.push(curr.left)
            }
            if(curr.right)
            {
                queue.push(curr.right)
            }
        }
    }
    findPath(target)
    {
        let path=[]
        let curr=this.root
        while(curr)
        {
            path.push(curr.value)
            if(curr.value==target){
                path.pop()
                return path
            }
            if(target<curr.value)
            {
                curr=curr.left
            }else{
                curr=curr.right
            }
        }
    }
    height(root)
    {
        if(root===null)
        {
            return 0
        }
        let left=this.height(root.left)
        let right=this.height(root.right)
        return Math.max(left,right)+1
    }
    closest(root,target){
        let clos=root.value
        while(root)
        {
            if(Math.abs(root.value-target)<Math.abs(clos-target))
            {
                clos=root.value
            }
            if(target<root.value){
                root=root.left
            }else{
                root=root.right
            }
        }
        return clos
    }
    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
}
const tree=new bst()
tree.insert(5)
tree.insert(2)
tree.insert(7)
tree.insert(6)
tree.insert(1)
// tree.delete(6)
// console.log(tree.findPath(6));
tree.bfs()
// console.log(tree.closest(tree.root,8));
// console.log(tree.height(tree.root));
// tree.inorder(tree.root)