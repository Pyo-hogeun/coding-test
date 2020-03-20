
function pondDepth( data, _width){
    let pondArr = [];
    // 연못 txt를 배열로 변환
    function literalToArr(_literal){
        let re = new RegExp("\\s");
        let arr = _literal.split(re);
        let x = 0;
        let y = 0;
        
        arr.map((v)=>{
            x = x%_width;
            let location = [x , y, v*1];
            if( x >= _width - 1){
                y++;
            }
            x++;
            pondArr.push(location);
        })
        // console.log(pondArr);
    }
    literalToArr(data);
    
    
    // 순회
    let temp = pondArr;
    let acc = 0;
    let count = 0;
    function cycle(arr){
        count = 0;
        acc = 0;
        arr.map((value, key) => {
            if(
                key !== 0 
                && key > 10
                && key%10 !== 0
                && key%10 !== 9
                && key < pondArr.length - 10
            ){
                // 상하좌우 비교
                let compareArround = false;
                value[2] <= pondArr[key - 1][2] 
                && value[2] <= pondArr[key + 1][2]
                && value[2] <= pondArr[key - 10][2]
                && value[2] <= pondArr[key + 10][2] ? compareArround = true : compareArround = false;
                // console.log(compareArround)
                
                // 1증가
                if( compareArround === true ){
                    temp[key][2] += 1; // 해당 셀에 1증가
                    acc += value[2]; // 연못깊이총합 증가
                    count += 1; //증가이력 true
                } else {
                    acc += value[2]; // 연못깊이총합 증가
                }
            }
        });
    }

    for( var k = 0; k < _width/2; k++ ){
        // 더 깊어지지 않을때 까지 반복
        cycle(temp);
        if( count === 0 ){
            break;
        }
    }
    
    // 화면에 그리기
    function render(state){
        var el = '';
        for(let r = 0; r < state.length; r++ ){
            if(0 < r && r%10 === 0){
                el += '<br>'
            }
            el += state[r][2] + ' '
        }
        el += '<br><br>' + ' 연못 총 깊이 : ' + acc;
        document.querySelector('body').innerHTML = el;
    }
    render(temp);
    console.log('연못 총 깊이 : '+ acc);
    return acc;
}

const pond = `0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 0 0 0 0 0
0 0 0 1 1 1 0 0 0 0
0 1 1 1 1 1 1 0 0 0
0 1 1 1 1 1 1 1 1 0
0 1 1 1 1 1 1 1 1 0
0 0 1 1 1 1 1 1 0 0
0 0 0 1 1 1 1 0 0 0
0 0 0 0 1 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0`

window.onload = () => {
    pondDepth(pond, 10);
}