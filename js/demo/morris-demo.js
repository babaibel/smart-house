$(function() {

    new Morris.Line({
        element: 'statistic-two-lines',
        data: [
            { y: '2006', a: 5, b: 10 }, 
            { y: '2007', a: 10, b: 10 },
            { y: '2008', a: 22, b: 10 },
            { y: '2009', a: 8, b: 10 },
            { y: '2010', a: 22, b: 10 },
            { y: '2011', a: 8, b: 10 },
            { y: '2012', a: 10, b: null },
            { y: '2013', a: 5, b: null }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Температура', 'Котел включен'],
        hideHover: 'auto',
        resize: true,
        lineColors: ['#1fb31a','#0000ff'],
        eventLineColors: ['#ceceff'],
        events: [
            ['2006', '2007'],
            ['2008', '2009'],
            ['2011', '2013']
        ]
    });

    new Morris.Line({
        element: 'statistic-one-line',
            data: [
                { year: '2008', value: 5 },
                { year: '2009', value: 10 },
                { year: '2010', value: 8 },
                { year: '2011', value: 22 },
                { year: '2012', value: 8 },
                { year: '2014', value: 10 },
                { year: '2015', value: 5 }
            ],
        xkey: 'year',
        ykeys: ['value'],
        resize: true,
        lineWidth:4,
        labels: ['Value'],
        lineColors: ['#1ab394'],
        pointSize:5,
    });

});
