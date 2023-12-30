$(function () {
    /*عند الضغط على الزر استدعي الدالة لتعمل وتظهر وتخفي النص*/
    $(".video-info .main-btn").on("click", function() { readMore(); });
    /*إخفاء حميع الردود*/
    $(".reply").parents("div.row").next("div.card").hide();
    /* إظهار وإخفاء الردود عند الضغط على زر الردود*/
    $(".reply").on("click", function() { $(this).parents("div.row").next("div.card").toggle(); });
});
/*الدالة التي نستخدمها لإظهار وإخفاء العناصر*/
function readMore() {
    let dots = document.getElementById("dots");/*أحضر النقاط الثلاث*/
    let moreText = document.getElementById("more");/*أحضر النص الذي نريد إظهاره وإخفائه*/
    let btnText = document.querySelector(".video-info .main-btn");/*أحضر الزر الذي سنضغط عليه*/
    if (dots.style.display === "none") {/*إذا كانوا النقاط الثلاث مخفيين يعني النص ظاهر وضغطت عالزر*/
      dots.style.display = "inline";/*أظهر النقط */
      btnText.innerHTML = "عرض المزيد";
      moreText.style.display = "none";/*أخفي النص */
    } else {/*إذا كانت النقط الثلاث ظاهرين أي النص مخفي وضغطت على الزر */
      dots.style.display = "none";/*أخفي النقط */
      btnText.innerHTML = "عرض عناصر أقل";
      moreText.style.display = "inline";/*أظهر النص المخفي */
    }
}