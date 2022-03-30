import { VFC } from 'react';
import styled from 'styled-components';


export const Top: VFC = () => (

// let map;
// let infowindow;

// function getLocation() {

//   // 位置情報を取得する
//   navigator.geolocation.getCurrentPosition(
//     function (position) {

//       // 現在地の緯度経度所得
//       let latitude = position.coords.latitude;
//       let longitude = position.coords.longitude;
//       let latlng = new google.maps.LatLng(latitude, longitude);

//       // 現在地の緯度経度を中心にマップを生成
//       map = new google.maps.Map(document.getElementById('map'), {
//         center: latlng,
//         zoom: 15
//       });
//       console.log(map)

//       let marker = new google.maps.Marker({
//         map: map,             // Mapクラスオブジェクト
//         position: latlng   // LatLngクラスオブジェクト
//       });

//       //現在地の緯度経度を中心にマップに円を描く
//       let circleOptions = {
//         map: map,
//         center: new google.maps.LatLng(latitude, longitude),
//         radius: 2000,//1km
//         strokeColor: "#009933",
//         strokeOpacity: 1,
//         strokeWeight: 1,
//         fillColor: "#00ffcc",
//         fillOpacity: 0.35
//       };

//       circle = new google.maps.Circle(circleOptions);

//       //現在地から1キロ以内のレストランを検索
//       infowindow = new google.maps.InfoWindow();
//       let service = new google.maps.places.PlacesService(map);

//       service.nearbySearch({
//         location: latlng,
//         radius: 1000,//1km
//         name: ['カレー'],
//       }, callback);


//       //地図上にマーカーをプロット
//       function callback(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           for (let i = 0; i < results.length; i++) {
//             createMarker(results[i], i + 1);
//           }

//           let aaa = results.map(function (value) {

//             //配列の各要素を2倍にする
//             return value.geometry.location

//           });

//           console.log(results)
//           console.log(aaa)

//           let distanceMatrixService = new google.maps.DistanceMatrixService();

//           // 出発点
//           let origns = [latlng];
//           // 到着点
//           let destinations = aaa//ここにfunction callback(results, status)のresultsを格納したい

//           console.log(origns)

//           // DistanceMatrix の実行
//           distanceMatrixService.getDistanceMatrix({
//             origins: origns, // 出発地点
//             destinations: destinations, // 到着地点
//             travelMode: 'WALKING', // 車モード or 徒歩モード
//           }, function (response, status) {
//             if (status == google.maps.DistanceMatrixStatus.OK) {

//               // 出発地点と到着地点の住所（配列）を取得
//               let origins = response.originAddresses;
//               let destinations = response.destinationAddresses;

//               // 出発地点でループ
//               for (let i = 0; i < origins.length; i++) {
//                 // 出発地点から到着地点への計算結果を取得
//                 let results = response.rows[i].elements;

//                 // 到着地点でループ
//                 for (let j = 0; j < results.length; j++) {
//                   let from = origins[i]; // 出発地点の住所
//                   let to = destinations[j]; // 到着地点の住所
//                   let duration = results[j].duration.value; // 時間
//                   let distance = results[j].distance.text; // 距離
//                   console.log(from, to, duration, distance);
//                 }
//               }
//             }
//             console.log(response);
//           });
//         }
//         console.log(results)
//       }

//       //地図上のマーカーをクリックした際の動作
//       function createMarker(place, index) {
//         let placeLoc = place.geometry.location;
//         let marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location,
//           icon: {
//             fillColor: "black",                //塗り潰し色
//             fillOpacity: 0.8,                    //塗り潰し透過率
//             path: google.maps.SymbolPath.CIRCLE, //円を指定
//             scale: 13,                           //円のサイズ
//             strokeColor: "#fff",              //枠の色
//             strokeWeight: 1.0                    //枠の透過率
//           },
//           label: {
//             text: String(index),         //ラベル文字
//             color: '#fff',        //ラベル文字の色
//             fontFamily: 'sans-serif',  //フォント
//             fontWeight: 'bold',        //フォントの太さ
//             fontSize: '14px'           //フォントのサイズ
//           }
//         });




//         const request = {
//           placeId: place.place_id,
//           fields: ["name", "formatted_address", "reviews", "place_id", "geometry", "opening_hours", "photos", "rating",],
//         };
//         // const infowindow = new google.maps.InfoWindow();
//         const service = new google.maps.places.PlacesService(map);

//         service.getDetails(request, (placee, status) => {
//           if (
//             status === google.maps.places.PlacesServiceStatus.OK &&
//             placee &&
//             placee.geometry &&
//             placee.geometry.location
//           ) {
//             console.log(placee);
//           }

//         });



//       }



//     }, function (error) {
//       // 失敗時の処理
//       alert('エラー：' + error);
//     });





// }



<>
  <SMap id="map"></SMap>
  <p><button>近所のレストランを検索</button></p>
  </>
);

const SMap = styled.div`
height:400px;
width:600px;
`
