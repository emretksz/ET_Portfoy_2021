  


        $('.icofont-reply').click(function () {

            //var guestId = $('.icofont-reply').parent().children().attr('id');
            //var guestId = $('.yorumId').attr('id');
            //var guestName = $('.yorumId').text();
            var guestId = $(this).parent().parent().children('h5').attr('id'); // .icofont-reply sınıfımın üstündeki div'in üstündeki divine eriştim ve bu divin içindeki bütün çocukarı çağırdım.
                                                                                //Bu çocuklardan kullanmak istediğimi children metodu içinde belirttim('h5') ve bu metodumun özellik olarka id tagı içindeki değeri almasını söyledim
            var guestName = $(this).parent().parent().children('h5').text();   /// h5 içindeki text değerini aldım.
            $('#Comment-guest-id').html(guestId);           /// tıklandığında guestId'yi tutturmak stedim çünkü bu kişiye yorum yazılmak isnilirse ıd'ye ihtiyacım olacak :)
            $('#Comment-guest-name').removeAttr('hidden');
            $('#Comment-guest-name').html(guestName);
            $('#Comments-Leave').removeAttr('hidden');

        })
        $('#Comments-Leave').click(function () {

            $('#Comment-guest-id').html();
            $('#Comment-guest-name').html(' ');
            $('#Comment-guest-name').attr('hidden', 'hidden');
            $('#Comments-Leave').attr('hidden','hidden');
        })
    






        ////burası benim ilk yorumları göndereciğim yer olacak
    /*   $(document).ready(function () {* /
             //classıma tıklandığında olacka işlem
            /// blog Id'Yial
       */
            $('#submit_contact').click(function () {
             
                var blogId = $('#BlogId').val();
            var name = $('#name').val();
            var comment = $('#comment').val();
            var commentId = $('#Comment-guest-id').text();
            alert(name);
            $.ajax({
    
                url: '/Home/Commentlist',
            method: 'GET',
            async: false,
            data: {blogId, name, comment, commentId},
            success: function (data) {
                $('#comment-refresh').html();
                    },
            error: function () {
    
                alert("Yorumlar Gelmedi");
                    }
    
                })
    
            $.ajax({
    
                url: '/HOME/CommentCount',
            method: 'GET',
            async: false,
            data: {blogId},
            success: data(function (data) {
                $('.comments-count').html(data, ' ', "yorum");
                    }),
            error: data(function () {
    
                alert("comment country'de sorun var");
                    })
    
    
                })
            })





    $(document).ready(function () {

        $('.q').click(function () {
            var id = $(this).attr('id');
            /* var id = $('#deneme').attr().val();*/

            $.ajax({
                url: '/Home/BlogList',
                method: 'GET',
                async: false,
                data: { id },
                success: function (data) {
                    $('#Blog_list').html(data);
                },

                error: function (data) {
                    alert("Veri Gelmedi");
                }
            })
        })
    });

            //$(document).ready(function () {

            //    $('.x').click(function () {
            //        var id = $(this).attr('id');
            //        /* var id = $('#deneme').attr().val();*/
            //        var name = $(this).text();
            //        alert(id + name);
            //    });
            //});

