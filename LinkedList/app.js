class node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedlist {
    constructor(data) {
        this.head = new node(data)
        this.next = null
        this.tail = this.head
        this.count = 1
    }
    append(data) {
        let newnode = new node(data)
        this.tail.next = newnode
        this.tail = newnode
        this.count += 1
    }
    listll() {
        let a = []
        let n = this.head

        while(n != null) {
            a.push(n.data)
            n = n.next
        }
        return a
    }
}

ll = new linkedlist(null)
for(let i = 0; i < 10; i++) {
    ll.append(i)
}
console.log(ll.listll())

let aa = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let r of aa) {
    for(let c of r) {
        console.log(c)
    }
}

