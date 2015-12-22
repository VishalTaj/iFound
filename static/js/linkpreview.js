(function(e){var t=function(e,t){this.init(e,t)};t.prototype={constructor:t,options:null,url:null,$element:null,$previewContainer:null,$refreshButton:null,init:function(t,n){this.$element=e(t);this.options=n;if(!this.$element)return;this.initPreviewContainer();this.initUrlValue();if(n&&n.refreshButton){this.$refreshButton=e(n.refreshButton);var r=this;this.$refreshButton.on("click",function(){r.emptyPreviewContainer();r.initUrlValue();r.getSource(r.url,r.renderPreview,r.renderError)})}this.getSource(this.url,this.renderPreview,this.renderError)},initPreviewContainer:function(){this.getOption("previewContainer")?this.$previewContainer=e(this.options.previewContainer):this.$previewContainer=this.$element.parent();this.$previewContainer.addClass("link-preview");this.getOption("previewContainerClass")?this.$previewContainer.addClass(this.options.previewContainerClass):this.$previewContainer.addClass("well row-fluid")},initUrlValue:function(){this.getOption("url")?this.url=this.options.url:this.url=this.$element.attr("href")||this.$element.text()||this.$element.val()},emptyPreviewContainer:function(){this.$previewContainer.empty()},getSource:function(t,n,r){if(!this.validateUrl(this.url))return;typeof this.getOption("preProcess")=="function"&&this.options.preProcess();var i=this;e.ajax({url:t,type:"GET",success:function(e){n(this.url,e,i);typeof i.getOption("onSuccess")=="function"&&i.options.onSuccess(e)},error:function(){r(this.url,i);typeof i.getOption("onError")=="function"&&i.options.onError()},complete:function(){typeof i.getOption("onComplete")=="function"&&i.options.onComplete()}})},renderPreview:function(t,n,r){if(r.url!==t)return;r.emptyPreviewContainer();n=n.replace(/<\/?[A-Z]+[\w\W]*?>/g,function(e){return e.toLowerCase()});var i=document.implementation.createHTMLDocument("");i.body.innerHTML=n;var s=e(i),o=r.findTitleInDom(s),u=r.findDescriptionInDom(s),a=r.findImageInDom(s),f=e("<a></a>").attr("href",t).text(o),l=e("<p></p>").text(u),c;if(a){var h=e("<img></img>").attr("src",a),p=e("<div></div>").addClass("span4");c=e("<div></div>").addClass("span8");p.append(h);r.$previewContainer.append(p)}else c=e("<div></div>");c.append(f).append(l);r.$previewContainer.append(c)},renderError:function(t,n){if(n.url!==t)return;n.emptyPreviewContainer();var r=e("<div></div>").addClass("alert alert-error");n.getOption("errorMessage")?r.text(n.options.errorMessage):r.text("We are sorry we couldn't load the preview. The URL is invalid.");n.$previewContainer.append(r)},findTitleInDom:function(e){return e.find("title").text()||e.find("meta[name=title]").attr("content")},findDescriptionInDom:function(e){return e.find("meta[name=description]").attr("content")},findImageInDom:function(e){var t=e.find("meta[itemprop=image]").attr("content")||e.find("link[rel=image_src]").attr("content")||e.find("meta[itemprop=image]").attr("content")||this.findFirstImageInBody(e.find("body"));if(t&&!this.validateUrl(t)){var n=document.createElement("a");n.href=this.url;t=n.protocol+"//"+n.hostname+t}return t},findFirstImageInBody:function(t){var n,r=t.find("img[src]"),i;r.each(function(){i=e(this);if(i.attr("height")&&i.attr("height")>40&&i.attr("width")&&i.attr("width")>40){n=this.src;return!1}});return n},getOption:function(e){return this.options&&this.options[e]?this.options[e]:null},validateUrl:function(e){return/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)}};e.fn.linkpreview=function(n){return this.each(function(){var r=e(this),i=r.data("linkpreview"),s=typeof n=="object"&&n;if(n instanceof t){r.data("linkpreview",i=n);i.init(this,i.options)}i||r.data("linkpreview",i=new t(this,e.extend({},e.fn.linkpreview.defaults,s)));typeof n=="string"&&i[n]()})};e.fn.linkpreview.defaults={};e.fn.linkpreview.Constructor=t})(window.jQuery);