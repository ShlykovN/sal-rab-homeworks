function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    let shippingSum;

    
    //этот блок правильный, но заменен на другой по рекомендации преподавателя
    //if (productsSum == 0){
    //    shippingSum = 0;
    //}else if (productsSum >= freeShippingMinSum){
    //    shippingSum = 0;}


    //это блок преподавателя
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
            shippingSum = 0;
    } 
    // мой блок
    else if (productsSum > 0 && productsSum < freeShippingMinSum){
        shippingSum = shippingPrice;
    }

    

    
    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum

    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // опять таки - это мой блок и он правильный
    //let discountSum;
     //if (productsSum >= discountMinSum){
    //    discountSum = (discountPart/100*productsSum);
    //}else discountSum = 0;


    // но заменен на этот по рекоменлдации преподавателя (тут присутствуют тернарые операторы, 
    // про которые на занятии ничего не рассказывали)
    let discountSum = productsSum >= discountMinSum ? discountPart/100*productsSum : 0;





    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountSum

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    let totalSum;
    totalSum = productsSum;
    totalSum = totalSum - discountSum;


    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!


    totalSum = totalSum + shippingSum;
    
    
    // мой блок кода, и он работает
    //let freeShipping;
    //(shippingSum == 0) ? freeShipping = true : freeShipping = false;
    
    // блок кода который посоветовал использовать преподаватель
    let freeShipping = shippingSum == 0;    //и как это работает абсолютно непонятно

    //freeShipping = !shippingSum;  //еще один вариант реализации без использования if\else

    


    //Комментарий студента:
    // последний блок совершенно непонятно как выполлнять, то есть до момента (shippingSum == 0) я дошел,
    // а дальше, откуда брать значения "?" и ":" и как они работают
    // совершенно непонятно (ткните пальцем, если это есть в материалах лекции)
    // ровно так же непонятно каким образом работяет связка "freeShipping = !shippingSum;"
    // работу я сделал, но блок (shippingSum == 0) ? freeShipping = true : freeShipping = false;
    // тупо подсмотрен в комментариях. 
    // конец комментария.






    // прибавьте к totalSum значение shippingSum

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
