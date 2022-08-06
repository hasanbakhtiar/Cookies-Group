// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var        -> variable (global)
// let        -> let      (local)
// const      -> constant (local)

// //global
// if (true) {
//     // local global
//     if (true) {
//         // local global
//         if (true) {
//             // local
//             var a = 5;
//         }
//     }
// }

// console.log(a);

// ===================================================================================

// if -> eger
// else ->  deyilse
// else if -> deyilse eger

// const a = prompt();
// if (a == 1) {
//     console.log("a beraberdir 1");
// }else if(a == 2){
//     console.log("a beraberdir 2");

// }
// else if(a == 3){
//     console.log("a beraberdir 3");

// }
// else{
//     console.log("Duz reqem istifade edin");
// }

// const myTime = 7;

// if (myTime >= 5 && myTime <= 12) {
//   console.log("Good Morning");
//   if (myTime == 7) {
//     console.log("Get up");
//   }else if(myTime == 9){
//     console.log("Have breakfast");
//   }
// } else if (myTime >= 13 && myTime < 17) {
//   console.log("Good Afternoon");
// } else if (myTime >= 17 && myTime < 21) {
//   console.log("Good Evening");
// } else if (myTime >= 21 && myTime <= 23) {
//   console.log("Good Night");
// } else {
//   console.log("No Time");
// }

// const info = 5;
// switch (info) {
//   case 5:
//     console.log("bu 5dir");
//     if (info < 10) {
//         console.log("Hello");
//     }
//     break;
//   case 10:
//     console.log("bu 10dur");
//     break;
//   default:
//     console.log("duzgun reqem daxil edin");
//     break;
// }


// try {
//     throw "";
//     console.loag("Hello");
// } catch (err) {
//     console.log(err);
//     // console.log("Burada bir sehv var");
// }finally{
//     console.log("everything is good");
// }