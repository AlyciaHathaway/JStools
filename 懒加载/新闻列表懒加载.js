// <p class='load-more'>加载更多</p>
var pageIndex = 0;
var isOver = false;
var isNewsArrive = true;
getNews();
// 当页面滚动时，获取新闻，把新闻加载
$(window).on('scroll', checkNews)

function checkNews() {
	if(isShow($('.load-more')) && !isOver && isNewsArrive) {
	getNews();	
	}
}
function getNews() {
	isNewsArrive = false;
	$.get('/getNews', {page: pageIndex}).done(function(ret) {
		isNewsArrive = true;

		if(ret.status === 0) {
			pageIndex++;
			appendHtml(ret.data);
			checkNews();
		}else{
			alert('获取新闻出错')
		}
	}).fail(function() {
		alert('系统异常')
	})
}

function appendHtml(news) {
	if(news.length === 0) {
		$('.load-more').remove();
		$('.container').append('<p>没有更多数据了</p>');
		return;
	}
	var htmls = '';
	$.each(news, function() {
		htmls += '<li class="item">';
		htmls += '<a href="' + this.link + '">';
		htmls += '<div class="thumb"> <img src="' + this.img + '"></div>';
		htmls += '<h2>'	+ this.title + '</h2>';
		htmls += '<p>' + this.brif + '</p>';
		htmls += '</a></li>';
	})

	$('.news').append(htmls);
}

function isShow($node) {
	var windowHeight = $(window).height(),
		scrollTop = $(window).scrollTop(),
		offsetTop = $node.offset().top,
		nodeHeight = $node.height();
	if (windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight) {
		return true;
	}else {
		return false;
	}
}