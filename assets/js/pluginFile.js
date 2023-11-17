let mainArray;
(function (pWindow) {
    if (typeof pWindow.CustomList == "function") {
        throw new Error("CustomList function already defined");
    }
    let CustomList = function (pId, options) {
        if (!(this instanceof CustomList)) {
            return new CustomList(pId, options);
        }
        this.domEl = document.getElementById(pId);
        if (!this.domEl) {
            throw new Error("dom not found");
        }
        mainArray = options;
        this.displayList();
    };
    CustomList.prototype.displayList = function () {
        add();
    }
    pWindow.CustomList = CustomList;
})(window)

// ======================================== add ========================================

function add() {
    let firstOne;
    for (let i = 0; i < mainArray.length; i++) {
        firstOne = `<button class="rounded cart mt-3 mb-3" onclick="adder(${mainArray[i].id})">
            <div class="card" >
                <img src="${mainArray[i].img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-text text-center">${mainArray[i].name}</h2>
                </div>
            </div>
            </button>`
        $("#firstDiv").append(firstOne)
    }
}

let secondOne;
let data;
let index1;
let index2;
let index3;
let index4;
let index5;
let index6;
let index7;
let j = 0;
function adder(num) {
    if (j == 0) {
        for (let i = 0; i < mainArray.length; i++) {
            data = num;
            if (num == mainArray[i].id) {
                index1 = mainArray[i].name
                index2 = mainArray[i].id
                index3 = mainArray[i].m1
                index4 = mainArray[i].m2
                index5 = mainArray[i].m3
                index6 = mainArray[i].m4
                index7 = mainArray[i].m5
                $("#Nameinput").val(index1)
                $("#idinput").val(index2)
                // $("#M1input").val(value3)
                validate("M1input", index3)
                validate("M2input", index4)
                validate("M3input", index5)
                validate("M4input", index6)
                validate("M5input", index7)
                // $("#M2input").val(value4)
                // $("#M3input").val(value5)
                // $("#M4input").val(value6)
                // $("#M5input").val(value7)
                j++;
            }

        }

    }
}

// ======================================= edit ================================================

$("#edit").on("click", () => {
    $("#Nameinput").removeAttr("disabled")
   
    $("#M1input").removeAttr("disabled")
    $("#M2input").removeAttr("disabled")
    $("#M3input").removeAttr("disabled")
    $("#M4input").removeAttr("disabled")
    $("#M5input").removeAttr("disabled")
});



// ============================================ save =====================================================

$("#save").on("click", () => {
    save();
})
function save() {
    j = 0;
    mainArray.forEach((item) => {
        if (item.id == data) {
            item.name = $("#Nameinput").val();
            item.id = $("#idinput").val();
            item.m1 = $("#M1input").val();
            item.m2 = $("#M2input").val();
            item.m3 = $("#M3input").val();
            item.m4 = $("#M4input").val();
            item.m5 = $("#M5input").val();
            $(".inputs").css({ border: "" })
            $("#firstDiv").html('');
            add();
            $("#Nameinput").val('');
            $("#idinput").val('');
            $("#M1input").val('');
            $("#M2input").val('');
            $("#M3input").val('');
            $("#M4input").val('');
            $("#M5input").val('');
            $("#Nameinput").attr("disabled", true);
            
            $("#M1input").attr("disabled", true);
            $("#M2input").attr("disabled", true);
            $("#M3input").attr("disabled", true);
            $("#M4input").attr("disabled", true);
            $("#M5input").attr("disabled", true)
        }
    })
}

// ========================================== validate ===========================================

function validate(id, mark) {
    $(`#${id}`).val(mark)
    if (mark < 35) {
        $(`#${id}`).css({ border: "2px solid red" })
    }
}

// ============================================== filter ============================================

$("#filterinput").on("change", () => {
    search($("#filterinput").val())
})

let grid;
function search(nam) {
    mainArray.forEach(n => {
        if (n.name.toLowerCase() == nam) {
            $("#firstDiv").html('')
            grid = `<button class="rounded cart mt-3 mb-3" style="width:250px;height:250px"  onclick="adder(${n.id})">
            <div class="card" >
                <img src="${n.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-text text-center">${n.name}</h2>
                </div>
            </div>
            </button>`
            $("#firstDiv").append(grid)
        }
    })
    if($("#filterinput").val()==''){
        $("#firstDiv").html('')
        add()
    }
}