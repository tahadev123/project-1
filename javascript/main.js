const success = document.getElementById("success");
const error = document.getElementById("error");
const warning = document.getElementById("warning");
const info = document.getElementById("info");
const question = document.getElementById("question");
 
success.addEventListener("click", () => {
    cuteAlert({
        type: "success",
        title: "موفقیت آمیز",
        message: "این یک پیغام موفقیت آمیز است",
        buttonText: "باشه",
        closeStyle: "circle"
    })
});
 
error.addEventListener("click", () => {
    cuteAlert({
        type: "error",
        title: "خطا",
        message: "این یک پیغام خطا است",
        buttonText: "باشه",
        closeStyle: "circle"
    })
});
 
warning.addEventListener("click", () => {
    cuteAlert({
        type: "warning",
        title: "هشدار",
        message: "این یک پیغام هشدار است",
        buttonText: "باشه",
        closeStyle: "circle"
    })
});
 
info.addEventListener("click", () => {
    cuteAlert({
        type: "info",
        title: "اطلاعات",
        message: "این یک پیغام اطلاعات است",
        buttonText: "باشه",
        closeStyle: "circle"
    })
});
 
question.addEventListener("click", () => {
    cuteAlert({
        type: "question",
        title: "سوالی",
        message: "این یک پیغام سوالی است",
        confirmText: "حله",
        cancelText: "لغو",
        closeStyle: "circle"
    }).then((e) => {
        if (e == "confirm") alert("تایید شد");
        else alert("لغو شد")
    });
});