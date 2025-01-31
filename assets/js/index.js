const map = L.map('map').setView([35.4599, 134.0653], 10.8); 

// 地図タイルの指定
L.tileLayer('https://api.mapbox.com/styles/v1/mahiroooooon/cm3ixd01c00am01sq1pufhqxs/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFoaXJvb29vb29uIiwiYSI6ImNtM2l0Y29mZjAzZXcyanB0bTlwd3ljc2kifQ.DKXHXrW977s-Rb034163CA', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(map);



// 観光地データ
const locations = [
    { 
        name: "鳥取砂丘", 
        lat: 35.5412, 
        lng: 134.2222,
        media: [
            { 
                type: 'video', 
                url: 'assets/videos/camel01.mp4',
                caption: 'ラクダに乗れます'
            },
            { 
                type: 'video', 
                url: 'assets/videos/camel02.mp4',
                caption: 'ラクダはとてもお利口さん'
            },
            { 
                type: 'video', 
                url: 'assets/videos/camel03.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/sakyu01.mp4',
                caption: '行ってきまーす！'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sakyu02.mp4',
                caption: 'どこにいるでしょうか？？？'
            },
            { 
                type: 'video', 
                url: 'assets/videos/oasis01.mp4',
                caption: 'オアシスも広いです'
            },
            { 
                type: 'video', 
                url: 'assets/videos/oasis02.mp4',
                caption: 'オアシスの中から見る景色も綺麗です'
            },
            { 
                type: 'image', 
                url: 'assets/images/sakyu03.jpg',
                caption: 'こんなシルエット写真も撮れます'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sakyu04.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/sakyu05.mp4',
                caption: '眺めがいいです'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sakyu06.mp4',
                caption: '海だ！'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sakyu07.mp4',
                caption: '裸足で歩くとちょっと熱い砂'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sakyu08.mp4',
                caption: '海沿いの砂はちょっとしっとり'
            },
        ]
    },
    { name: "旧国鉄倉吉線廃線跡", lat: 35.3703, lng: 133.7373,
        media: [
            { 
                type: 'image', 
                url: 'assets/images/kurayoshiline01.jpg',
                caption: ''
            },
            { 
                type: 'image', 
                url: 'assets/images/kurayoshiline02.jpg',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/kurayoshiline03.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/kurayoshiline04.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/kurayoshiline05.mp4',
                caption: ''
            },
            { 
                type: 'image', 
                url: 'assets/images/kurayoshiline06.jpg',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/kurayoshiline07.mp4',
                caption: ''
            },
            { 
                type: 'image', 
                url: 'assets/images/kurayoshiline08.jpg',
                caption: ''
            },
            { 
                type: 'image', 
                url: 'assets/images/kurayoshiline09.jpg',
                caption: ''
            },
        ]
     },
    { name: "居酒屋 田田", lat: 35.4968, lng: 134.2274,
        media: [
            { 
                type: 'image', 
                url: 'assets/images/denden01.jpg',
                caption: '新鮮なお刺身'
            },
            { 
                type: 'video', 
                url: 'assets/videos/denden02.mp4',
                caption: '鳥取の名産、豆腐ちくわ'
            },
            { 
                type: 'video', 
                url: 'assets/videos/denden03.mp4',
                caption: 'とうもろこし'
            },
            { 
                type: 'video', 
                url: 'assets/videos/denden04.mp4',
                caption: '日本酒が美味しい'
            },
        ]
     },
    { name: "汽水空港", lat: 35.4720, lng: 133.9036,
        media: [
            { 
                type: 'image', 
                url: 'assets/images/kisuikuko01.jpg',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/kisuikuko02.mp4',
                caption: ''
            }
        ]
     },
    { name: "賀露港 市場食堂", lat: 35.5373, lng: 134.1812,
        media: [
            { 
                type: 'video', 
                url: 'assets/videos/karoko01.mp4',
                caption: '賀露港 市場食堂'
            },
            { 
                type: 'video', 
                url: 'assets/videos/karoko02.mp4',
                caption: '到着〜！'
            },
            { 
                type: 'image', 
                url: 'assets/images/karoko03.jpg',
                caption: 'メニュー'
            },
            { 
                type: 'video', 
                url: 'assets/videos/karoko04.mp4',
                caption: '海鮮丼(大盛り) ¥1,180'
            },
            { 
                type: 'video', 
                url: 'assets/videos/karoko05.mp4',
                caption: '北前船定食(お刺身) ¥1,180'
            },
            { 
                type: 'video', 
                url: 'assets/videos/karoko06.mp4',
                caption: 'もさえびの天ぷら'
            },
            { 
                type: 'video', 
                url: 'assets/videos/karoko07.mp4',
                caption: '新鮮なお刺身が美味しい！'
            },
        ]
     },
    { name: "鳥取砂丘 砂の美術館", lat: 35.5398, lng: 134.2383,
        media: [
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum00.mp4',
                caption: '砂の美術館'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum01.mp4',
                caption: '第15期展示 砂で世界旅行・フランス編'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum02.mp4',
                caption: 'ヴェルサイユ宮殿'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum03.mp4',
                caption: '奥行きがあるように見えるけど、無い'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum04.mp4',
                caption: '民衆を導く自由の女神'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum05.mp4',
                caption: 'フランスのファッション'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum06.mp4',
                caption: '鐘、2回鳴ってしまいました'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum07.mp4',
                caption: '展望台から夕日が見えました'
            },
            { 
                type: 'video', 
                url: 'assets/videos/sandmuseum08.mp4',
                caption: '外にも展示があります'
            }
        
        ]
     },
    { name: "Japanese TOTTORI Noodle 藤喜", lat: 35.4965, lng: 134.2260,
        media: [
            { 
                type: 'video', 
                url: 'assets/videos/ramen01.mp4',
                caption: '入口の様子'
            },
            { 
                type: 'video', 
                url: 'assets/videos/ramen02.mp4',
                caption: '極み醤油、極み塩、極み味噌'
            },
            { 
                type: 'video', 
                url: 'assets/videos/ramen03.mp4',
                caption: 'おいしい！'
            }
        ]
     },
    { name: "浦富海岸 遊覧船", lat: 35.5797, lng: 134.2978,
        media: [
            { 
                type: 'image', 
                url: 'assets/images/uradome01.jpg',
                caption: '遊覧船に乗ります'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome02.mp4',
                caption: '小さな島がたくさん'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome03.mp4',
                caption: '千貫松島 1本の松が生えています'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome04.mp4',
                caption: '島のスレスレを通ります'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome05.mp4',
                caption: '大迫力'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome06.mp4',
                caption: '岩美ブルーと呼ばれる透明度の高い海'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome07.mp4',
                caption: '水深7mの海底がはっきり見えます'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome08.mp4',
                caption: 'いろんな種類の鳥が見れました'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome09.mp4',
                caption: '船の後ろの景色'
            },
            { 
                type: 'video', 
                url: 'assets/videos/uradome10.mp4',
                caption: '船着場の売店'
            },
            { 
                type: 'image', 
                url: 'assets/images/uradome11.mp4',
                caption: 'イカスミソフトミックス'
            },
        ]
     },
    { name: "法師ヶ滝", lat: 35.3963, lng: 134.0276,
        media: [
            { 
                type: 'video', 
                url: 'assets/videos/houshi01.mp4',
                caption: '車で入れるのは途中まで。ここからは歩きます！'
            },
            { 
                type: 'image', 
                url: 'assets/images/houshi02.jpg',
                caption: '注意書き必読！'
            },
            { 
                type: 'video', 
                url: 'assets/images/houshi03.mp4',
                caption: '足元危険注意！'
            },{ 
                type: 'video', 
                url: 'assets/images/houshi04.mp4',
                caption: '水がとても澄んでいます'
            },{ 
                type: 'video', 
                url: 'assets/images/houshi05.mp4',
                caption: '岩が大きい！'
            },{ 
                type: 'video', 
                url: 'assets/images/houshi06.mp4',
                caption: '夏でもとても冷たいです！'
            },{ 
                type: 'video', 
                url: 'assets/images/houshi07.mp4',
                caption: '岩を越えて上流へ登れます'
            }
        ]
     },
    { name: "三朝温泉", lat: 35.4102, lng: 133.8944,
        media: [
            { 
                type: 'video', 
                url: 'assets/videos/misasa01.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa02.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa03.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa04.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa05.mp4',
                caption: ''
            },
            { 
                type: 'image', 
                url: 'assets/images/misasa06.jpg',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa07.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa08.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa09.mp4',
                caption: ''
            },
            { 
                type: 'image', 
                url: 'assets/images/misasa10.jpg',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa11.mp4',
                caption: ''
            },
            { 
                type: 'video', 
                url: 'assets/videos/misasa12.mp4',
                caption: ''
            }
        ]
     }
];

// ピンを立てる
locations.forEach(location => {
    L.marker([location.lat, location.lng])
    .addTo(map)
    .bindPopup(`
        <h2>${location.name}</h2>
        <div class="swiper">
            <div class="swiper-wrapper">
                ${location.media?.map((item, index) => `
                    <div class="swiper-slide" data-index="${index}" data-location="${location.name}">
                        ${item.type === 'image' 
                            ? `<img src="${item.url}" alt="${location.name}">`
                            : `<video controls><source src="${item.url}" type="video/mp4"></video>`
                        }
                        <div class="caption">${item.caption || ''}</div>
                    </div>
                `).join('')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `);
});

// ポーダル要素を作成
const modalHTML = `
    <div id="mediaModal" class="modal">
        <span class="modal-close">&times;</span>
        <div class="modal-content">
            <div class="modal-swiper">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', modalHTML);

// ポップアップが開かれた時の処理
map.on('popupopen', function(e) {
    const popupSwiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // スライドクリックイベントの追加
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const locationName = this.dataset.location;
            const location = locations.find(loc => loc.name === locationName);
            
            // モーダルのSwiperを更新
            const modalSwiper = document.querySelector('.modal-swiper .swiper-wrapper');
            modalSwiper.innerHTML = location.media.map(item => `
                <div class="swiper-slide">
                    ${item.type === 'image' 
                        ? `<img src="${item.url}" alt="${locationName}">`
                        : `<video controls><source src="${item.url}" type="video/mp4"></video>`
                    }
                    <div class="modal-caption">${item.caption || ''}</div>
                </div>
            `).join('');

            // モーダルを表示
            const modal = document.getElementById('mediaModal');
            modal.style.display = 'block';

            // モーダルのSwiperを初期化
            new Swiper('.modal-swiper', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                initialSlide: parseInt(this.dataset.index)
            });
        });
    });
});

// モーダルを閉じる処理
document.querySelector('.modal-close').addEventListener('click', function() {
    document.getElementById('mediaModal').style.display = 'none';
});

