### Сбор данных

Для сбора информации о маршрутах и станциях Санкт-Петербурга
я остановился на [государственном сайте](http://transport.orgp.spb.ru) города.

При переходе к случайному маршруту, в разделе XHR я обнаружил JSON-файл, содержащий всю необходимую информацию.
Единственный его недостаток был в том, что маршрут сочетал в себе соединенные прямой и обратный.
Пометки о направлении отсутствовали и было непонятно, где заканчивался прямой маршрут и начинался обратный.

На этой же странице присутствовала таблица с остановками, где они разделялись на две части. Доступа к таблице
через HTML не было - она подгружалась извне. Помогла ссылка на расписание - там таблица уже отслеживалась.
Достаточно было извлечь с этой страницы длины прямого и обратного маршрутов. Теперь нужно было
найти список всех id, чтобы проитерироваться по всем маршрутам.

При сборе id возникла проблема. Было понятно, где хранится весь список id, но здесь не поддерживался метод GET.
Поначалу данные собирались вручную, но это было неудобно и они часто обновлялись.
Этот процесс удалось автоматизировать.
Для корректого сбора пришлось использовать метод POST. Аналогично было собраны id остановок.

После этого данные были представлены в нужном формате.
