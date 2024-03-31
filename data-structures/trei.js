class trieNode{
    constructor()
    {
        this.children={}
        this.endNode=false
    }

}

class trei{
    constructor()
    {
        this.root=new trieNode()
    }
    insert(word)
    {
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                node.children[char]=new trieNode()
            }
            node=node.children[char]
        }
        node.endNode=true
    }
    display() {
        const words = [];
    
        const displayHelper = (node, currentWord) => {
            if (node.endNode) {
                words.push(currentWord); 
            }
            
            for (let char in node.children) {
                displayHelper(node.children[char], currentWord + char);
            }
        };
        
        displayHelper(this.root, '');
    
        console.log(words);
      }
      search(word){
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                return
            }
            node=node.children[char]
        }
        return node.endNode
    }
    prefix(word)
    {
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                return false
            }
            node=node.children[char]
        }
        return true
    }

}

const t=new trei()
t.insert("Rashid")
t.insert("Ramshad")
let search=t.search('Rashid')
console.log(t.prefix("Rashid"));
console.log(search);
t.display()