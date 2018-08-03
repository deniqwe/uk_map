document.addEventListener("DOMContentLoaded", function(event) {
        
    // Prepare demo data
    // Data is joined to map using value of 'hc-key' property by default.
    // See API docs for 'joinBy' for more info on linking data and map.
    var data = [
        ['ua-my', 'Одесса'],
        ['ua-ks', 'Херсон'],
        ['ua-kc', 'Киев'],
        ['ua-zt', 'Житомир'],
        ['ua-sm', 'Сумы'],
        ['ua-dt', 'Донецк'],
        ['ua-dp', 'Днепр'],
        ['ua-kk', 'Харьков'],
        ['ua-lh', 'Луганск'],
        ['ua-pl', 'Полтава'],
        ['ua-zp', 'Запорожье'],
        // ['ua-sc', 'Севастополь'],
        // ['ua-kr', 'Крым'],
        ['ua-ch', 'Чернигов'],
        ['ua-rv', 'Ровно'],
        ['ua-cv', 'Черновцы'],
        ['ua-if', 'Ивано-Франковск'],
        ['ua-km', 'Хмельницкий'],
        ['ua-lv', 'Львов'], 
        ['ua-tp', 'Тернополь'],
        ['ua-zk', 'Ужгород'],
        ['ua-vo', 'Волынь'],
        ['ua-ck', 'Черкасы'],
        ['ua-kh', 'Кировоград'],
        ['ua-kv', 'Киевская область'],
        ['ua-mk', 'Николаев'],
        ['ua-vi', 'Винница']
    ];

var west = ['ua-zk', 'ua-if', 'ua-lv', 'ua-tp', 'ua-cv', 'ua-km', 'ua-rv', 'ua-vo'];
var north = ['ua-ch', 'ua-kc', 'ua-zt', 'ua-kv'];
var east = ['ua-kk', 'ua-dp', 'ua-lh', 'ua-dt', 'ua-zp'];
var south = ['ua-kh', 'ua-mk', 'ua-my', 'ua-ks'];
var center = ['ua-sm', 'ua-pl', 'ua-ck', 'ua-vi'];
var cremia = ['ua-sc', 'ua-kr'];

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: 'countries/ua/ua-all',            
        },

        title: {
            text: null
        },

        legend: {
            enabled:false
        },

        series: [

        {
            animation: {
                duration: 1000
            },
            data:data,
            color:'#CED8E6',
            name:'Name',

            dataLabels: {
                enabled: true,
                format: '{point.value}'
            },

            tooltip: {
                headerFormat: '',
                padding:10,
                useHTML:true,
                pointFormatter:function(){
                    var point = this;
                    if(west.indexOf(point['hc-key'])!=-1){
                        return point.name='Запад';
                    }
                    if(east.indexOf(point['hc-key'])!=-1){
                        return point.name="Восток";
                    }
                    if(center.indexOf(point['hc-key'])!=-1){
                        return point.name="Центр";
                    }
                    if(north.indexOf(point['hc-key'])!=-1){
                        return point.name="Север";
                    }
                    if(south.indexOf(point['hc-key'])!=-1){
                        return point.name="Юг";
                    }
                    if(cremia.indexOf(point['hc-key'])!=-1){
                        return false;
                    }
                    
                }
            },

            states: {
                hover: {
                    color: '#9aa3af'
                }
            },
            exporting: {
                buttons: {
                    printButton: {
                        symbol: 'circle'
                    },
                    exportButton: {
                        enabled: false
                    }    
                }
            }

        },
            
/*        {
            animation: {
                duration: 1000
            },
            data:east,
            color:'#CED8E6',
            name: 'Восток',
            tooltip: {
                    pointFormat: '{point.name}'
            },
            states: {
                hover: {
                    color: '#9aa3af'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.value}'
            }
        },
*/
        ]
    });

});




