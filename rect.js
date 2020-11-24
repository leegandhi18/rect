window.addEventListener("load", function () {

    var total = document.getElementById("totalDiv");
    var addBtn = document.getElementById("addBtn");
    var removeBtn = document.getElementById("removeBtn");

    var num = 0;



    // function addHandler(event) {

    //     for (var i = 0 ; i < 100; i++) {
    //         var div = document.createElement("div");
    //         if(i % 100 == 0) {
    //             div.setAttribute("id","rectangle" +(i+1+num) );
    //         }
    //         div.setAttribute("class","rectangle");
    //         div.innerText = num+i+1 + "번 락커룸";

    //         total.appendChild(div);
    //     }

    //     document.getElementById("rectangle"+(num+1)).scrollIntoView();
    //     num += 100;
    // }

    function addHandler(event) {

        for (var i = 0; i < 100; i++) {
            var locker = document.createElement("input");
            if (i % 100 == 0) {
                locker.setAttribute("id", "rectangle" + (i + 1 + num));
            }
            locker.setAttribute("type", "button");
            locker.setAttribute("class", "rectangle");
            // locker.setAttribute("onClick","changeValue()");
            // locker.innerText = num+i+1 + " 번 락커룸 사용 전";
            locker.setAttribute("value", num + i + 1 + "번 락커룸");

            total.appendChild(locker);
        }

        // 락커룸 1,101,201... 100개씩 늘려나갈 때마다 스크롤 이동
        document.getElementById("rectangle" + (num + 1)).scrollIntoView();
        num += 100;
    }

    function removeHandler(event) {
        // total의 자식이 없을 경우 삭제가 동작되지 않도록
        // children의 개수가 0보다 클 경우에만 동작하도록 함.
        if (total.children.length > 0) {
            for (var i = 0; i < 100; i++) {
                var div = total.children[total.children.length - 1];
                total.removeChild(div);
            }
            num -= 100;
        }
    }

    addBtn.addEventListener("click", addHandler, false);
    removeBtn.addEventListener("click", removeHandler, false);
    // rectangle.addEventListener("click",changeValue,false);

});

// var rectangle = document.getElementsByClassName("rectangle");
// $(function() {

//     $("input").on("click", function() {

//        $("input").change("value", "123");

//     });

// });


// function changeValue() {
//     // for (var i = 0 ; i < 100; i++) {
//     //     if(rectangle.value == i+1+"사용 전") {
//     //         rectangle.value = i+1+"사용 중";
//     //     }
//     // }
//     rectangle.value = "123";


// }