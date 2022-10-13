const menu = [
    {
      id: 1,
      title: "Şevketi Bostan",
      category: "Ege",
      img: "./img/sevketi.jpg",
      desc: `Ege’nin mutfak şifrelerinden birisi de bu leziz ot. Şevketi bostan kasım ayında çıkan ve bahara kadar toplanabilen bir ottur. Etlisi, zeytinyağlısı ve salatası da yapılan şevketi bostanın en lezzetli halini Urla, Tire, Seferihisar ve Foça’da tatmak mümkün. `,
    },
    {
      id: 2,
      title: "Hamsi Pilavı",
      category: "Karadeniz",
      price: 13.99,
      img: "./img/02-hamsili-pilav.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "İzmir Köfte",
      category: "Ege",
      price: 6.99,
      img: "./img/izmir-köfte.jpg",
      desc: `Ege yemeklerinin vazgeçilmezlerinden birisi de İzmir köfte. İzmir köfte bol salça, uzun ve kalınca şekil verilmiş köfte,  patates domates ve biber kullanılarak yapılan bir Ege yemeği. İzmir köfte, Ege’nin en meşhur yemeklerinden birisi.`,
    },
    {
      id: 4,
      title: "Fava",
      category: "Ege",
      price: 20.99,
      img: "./img/fava.jpg",
      desc: `Çok sevilen bu eşsiz meze sadece meze olarak değil iç harcı olarak da kullanılmaktadır. Börek ve kanepelere çok yakışan bir lezzet olan fava, kuru bakla ve zeytinyağıyla yapılır. En lezzetli favayı Ayvalık, Cunda, Kuşadası, İzmir’de ve deniz mahsulleri yapan restoranlarda yiyebilirsiniz.`,
    },
    {
      id: 5,
      title: "Ege Keşkeği",
      category: "Ege",
      price: 22.99,
      img: "./img/keskek.jpg",
      desc: `Keşkek, Anadolu’nun pek çok ilinde pişirilen zengin bir lezzet. Yarma buğday, et ve kemikle yapılan bu özel yemek Ege mutfağında da ilk sıralarda yer alıyor. Yerel yemeklerin servis edildiği Ege restoranlarında bu nefis lezzeti tadabilirsiniz.`,
    },
    {
      id: 6,
      title: "Karalahana Çorbası",
      category: "Karadeniz",
      price: 18.99,
      img: "./img/04-karalahana-çorbası.jpg",
      desc: `Son zamanlarda en faydalı yiyeceklerinden biri olarak popülerleşen karalahananın çorbası Karadeniz’de en çok tüketilen yiyeceklerden biridir. Karalahanaya, mısır, barbunya gibi lezzetlerin de eklenmesiyle hazırlanan bu çorba bir vitamin deposudur.`,
    },
    {
      id: 7,
      title: "Laz Böreği",
      category: "Karadeniz",
      price: 8.99,
      img: "./img/08-laz-böreği.jpg",
      desc: `Bu meşhur Karadeniz tatlısı, böreğin katları arasına hafif bir muhallebinin döşenmesi ile hazırlanır. Laz böreği, çayla kahveyle, yemeklerden sonra günün her saatinde reddedilemeyen bir tatlı olarak çok sevilir. `,
    },
    {
      id: 8,
      title: "Ankara Tava",
      category: "Anadolu",
      price: 12.99,
      img: "./img/ankara.jpeg",
      desc: `Ankara’nın yöresel yemekleri arasında akla ilk gelenlerden biridir.  Hele ki yanında cacık, turşu, hoşaf, veya salata ile servis edilmesi adeta lezzeti üçe dörde katlıyor. `,
    },
    {
      id: 9,
      title: "Kaygana",
      category: "Karadeniz",
      price: 16.99,
      img: "./img/06-kaygana.jpg",
      desc: `Bol tereyağlı bir omleti andıran kaygana, hamsiyle, sebzelerle, yeşilliklerle hazırlanabilir. Hem kahvaltıda hem de ana yemeklerde tercih edilebilen bu lezzetli yiyeceğe çocuklar da bayılır.`,
    },
    {
      id:10,
      title: "Etli Ekmek",
      category: "Anadolu",
      price: 16.99,
      img: "./img/etli.jpg",
      desc: ` Konya ile özdeşleşen bir yemektir. Etli ekmeği her yerde yiyebilirsiniz ama Konya’daki tadı bulamazsınız. Lahmacuna çok benzese de yöntemleri farklıdır.`,
    },
    {
      id:11,
      title: "Kaygana",
      category: "Anadolu",
      price: 16.99,
      img: "./img/06-kaygana.jpg",
      desc: `Bol tereyağlı bir omleti andıran kaygana, hamsiyle, sebzelerle, yeşilliklerle hazırlanabilir. Hem kahvaltıda hem de ana yemeklerde tercih edilebilen bu lezzetli yiyeceğe çocuklar da bayılır.`,
    },
    {
      id:12,
      title: "Mıhlama(Kuymak)",
      category: "Karadeniz",
      price: 16.99,
      img: "./img/10-muhlama.jpg",
      desc: `Trabzon peyniri, tereyağı ve incecik mısır ununun kavrulmasıyla hazırlanan mıhlamaya Artvin’de kaymak da ilave edilir. Sıcakken servis edilen mıhlama en karakteristik Karadeniz yemeklerinden biridir.`,
    },
    {
      id:13,
      title: "Kayseri Yağlaması",
      category: "Anadolu",
      price: 16.99,
      img: "./img/10-muhlama.jpg",
      desc: `Kayseri’nin etli lezzetlerinden bir diğeri de, meşhur yağlaması. Lezzet ve görsel olarak lahmacuna oldukça benzeyen bu yemek, ince açılmış hamurların üzerine domates soslu kıyma eklenerek yapılıyor. Genellikle üst üste dizilen yağlama, üzerine yoğurt dökülerek servis ediliyor.`,
    },
  ];

const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")
const searchId = document.querySelector(".search-id")
window.addEventListener("DOMContentLoaded", function (){
  displayMenuItems(menu)

  // kategorilerden sadece bir değeri reduce metodu ile almak
  const categories = menu.reduce(
    function( values, item){
      if(!values.includes(item.category)){
        values.push(item.category)
      };
      return values
    },["All"]
  )
  const categoryBtns = categories.map( function(category){
    return `<button class="filter-btn " type="button" data-id=${category}>${category}</button>`
  }).join("")  
  container.innerHTML =categoryBtns
  
  const filterBtns = document.querySelectorAll(".filter-btn")
    // FİLTRELEME

    filterBtns.forEach( function(btn){
      btn.addEventListener("click", function (e) {
        const category= e.currentTarget.dataset.id;
        const menuCategory = menu.filter( function (menuItem) {
          if (menuItem.category === category){
            return menuItem;
          }
        });
        
        if (category === "All") {displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
      })
    })
})


function displayMenuItems (menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            </header>
        <p class="item-text">${item.desc}</p>
       
    </div>
</article>`
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu

}



