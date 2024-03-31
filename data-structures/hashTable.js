class hash{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size
    }
    hash(key)
    {
        let code=0
        // console.log(key);
        for(let i=0;i<key.length;i++)
        {
            code+=key.charCodeAt(i)
        }
        return code % this.size
        
    }
    set(key,value){
        const index=this.hash(key)
        // this.table[index]=value
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKey=bucket.find(item=>item[0]=== key)
            if (sameKey){
                sameKey[1]=value
            }
            else{
                bucket.push([key,value])
            }
        }
    }
    get(key)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKey=bucket.find(item=>item[0]==key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }
    remove(key)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket)
        {
            const sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }
}

const g= new hash(5)
g.set('name','rashi')
// g.remove('name')
console.log(g.get('name'));