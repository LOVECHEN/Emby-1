define(["loading","libraryMenu","listViewStyle","emby-linkbutton"],function(loading,libraryMenu){"use strict";function reload(page){loading.show(),ApiClient.getJSON(ApiClient.getUrl("Notifications/Types")).then(function(list){var html="",lastCategory="";html+=list.map(function(i){var itemHtml="";return i.Category!=lastCategory&&(lastCategory=i.Category,lastCategory&&(itemHtml+="</div>"),itemHtml+="<h2>",itemHtml+=i.Category,itemHtml+="</h2>",itemHtml+='<div class="paperList" style="margin-bottom:2em;">'),itemHtml+='<a class="listItem listItem-border" is="emby-linkbutton" data-ripple="false" href="notificationsetting.html?type='+i.Type+'">',i.Enabled?itemHtml+='<i class="listItemIcon md-icon">notifications_active</i>':itemHtml+='<i class="listItemIcon md-icon" style="background-color:#999;">notifications_off</i>',itemHtml+='<div class="listItemBody">',itemHtml+='<div class="listItemBodyText">'+i.Name+"</div>",itemHtml+="</div>",itemHtml+='<button type="button" is="paper-icon-button-light"><i class="md-icon">mode_edit</i></button>',itemHtml+="</a>"}).join(""),list.length&&(html+="</div>"),page.querySelector(".notificationList").innerHTML=html,loading.hide()})}function getTabs(){return[{href:"notificationsettings.html",name:Globalize.translate("TabNotifications")},{href:"appservices.html?context=notifications",name:Globalize.translate("TabServices")}]}return function(view,params){view.addEventListener("viewshow",function(){libraryMenu.setTabs("notifications",0,getTabs),reload(view)})}});