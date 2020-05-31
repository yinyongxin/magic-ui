<template>
  <div class="icon-page">
    <h2>Icon 图标</h2>
    <p class="m-b-40">提供了一套常用的图标集合。</p>
    <h2>使用方法</h2>
    <p>直接通过设置类名为 m-icon-iconName 来使用即可。例如：</p>
    <m-card class="m-b-5">
      <div >
        <i style="vertical-align: middle;" class="fz-22 m-r-15 m-icon-edit"></i>
        <i style="vertical-align: middle;" class="fz-22 m-r-15 m-icon-share"></i>
        <i style="vertical-align: middle;" class="fz-22 m-r-15 m-icon-delete"></i>
        <m-button type="primary" icon="m-icon-search">搜索</m-button>
      </div>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="170px">
      <pre>
        <code>
          &lt;i style="vertical-align: middle;" class="fz-22 m-r-15 m-icon-edit"&gt;&lt;/i&gt;
          &lt;i style="vertical-align: middle;" class="fz-22 m-r-15 m-icon-share"&gt;&lt;/i&gt;
          &lt;i style="vertical-align: middle;" class="fz-22 m-r-15 m-icon-delete"&gt;&lt;/i&gt;
          &lt;m-button type="primary" icon="m-icon-search"&gt;搜索&lt;/m-button&gt;
        </code>
      </pre>
    </m-show-box>
    <ul class="icon-list">
      <li><span><i class="m-icon-delete-solid"></i><span class="icon-name">m-icon-delete-solid</span></span></li>
      <li><span><i class="m-icon-delete"></i><span class="icon-name">m-icon-delete</span></span></li>
      <li><span><i class="m-icon-s-tools"></i><span class="icon-name">m-icon-s-tools</span></span></li>
      <li><span><i class="m-icon-setting"></i><span class="icon-name">m-icon-setting</span></span></li>
      <li><span><i class="m-icon-user-solid"></i><span class="icon-name">m-icon-user-solid</span></span></li>
      <li><span><i class="m-icon-user"></i><span class="icon-name">m-icon-user</span></span></li>
      <li><span><i class="m-icon-phone"></i><span class="icon-name">m-icon-phone</span></span></li>
      <li><span><i class="m-icon-phone-outline"></i><span class="icon-name">m-icon-phone-outline</span></span></li>
      <li><span><i class="m-icon-more"></i><span class="icon-name">m-icon-more</span></span></li>
      <li><span><i class="m-icon-more-outline"></i><span class="icon-name">m-icon-more-outline</span></span></li>
      <li><span><i class="m-icon-star-on"></i><span class="icon-name">m-icon-star-on</span></span></li>
      <li><span><i class="m-icon-star-off"></i><span class="icon-name">m-icon-star-off</span></span></li>
      <li><span><i class="m-icon-s-goods"></i><span class="icon-name">m-icon-s-goods</span></span></li>
      <li><span><i class="m-icon-goods"></i><span class="icon-name">m-icon-goods</span></span></li>
      <li><span><i class="m-icon-warning"></i><span class="icon-name">m-icon-warning</span></span></li>
      <li><span><i class="m-icon-warning-outline"></i><span class="icon-name">m-icon-warning-outline</span></span>
      </li>
      <li><span><i class="m-icon-question"></i><span class="icon-name">m-icon-question</span></span></li>
      <li><span><i class="m-icon-info"></i><span class="icon-name">m-icon-info</span></span></li>
      <li><span><i class="m-icon-remove"></i><span class="icon-name">m-icon-remove</span></span></li>
      <li><span><i class="m-icon-circle-plus"></i><span class="icon-name">m-icon-circle-plus</span></span></li>
      <li><span><i class="m-icon-success"></i><span class="icon-name">m-icon-success</span></span></li>
      <li><span><i class="m-icon-error"></i><span class="icon-name">m-icon-error</span></span></li>
      <li><span><i class="m-icon-zoom-in"></i><span class="icon-name">m-icon-zoom-in</span></span></li>
      <li><span><i class="m-icon-zoom-out"></i><span class="icon-name">m-icon-zoom-out</span></span></li>
      <li><span><i class="m-icon-remove-outline"></i><span class="icon-name">m-icon-remove-outline</span></span></li>
      <li><span><i class="m-icon-circle-plus-outline"></i><span
            class="icon-name">m-icon-circle-plus-outline</span></span></li>
      <li><span><i class="m-icon-circle-check"></i><span class="icon-name">m-icon-circle-check</span></span></li>
      <li><span><i class="m-icon-circle-close"></i><span class="icon-name">m-icon-circle-close</span></span></li>
      <li><span><i class="m-icon-s-help"></i><span class="icon-name">m-icon-s-help</span></span></li>
      <li><span><i class="m-icon-help"></i><span class="icon-name">m-icon-help</span></span></li>
      <li><span><i class="m-icon-minus"></i><span class="icon-name">m-icon-minus</span></span></li>
      <li><span><i class="m-icon-plus"></i><span class="icon-name">m-icon-plus</span></span></li>
      <li><span><i class="m-icon-check"></i><span class="icon-name">m-icon-check</span></span></li>
      <li><span><i class="m-icon-close"></i><span class="icon-name">m-icon-close</span></span></li>
      <li><span><i class="m-icon-picture"></i><span class="icon-name">m-icon-picture</span></span></li>
      <li><span><i class="m-icon-picture-outline"></i><span class="icon-name">m-icon-picture-outline</span></span>
      </li>
      <li><span><i class="m-icon-picture-outline-round"></i><span
            class="icon-name">m-icon-picture-outline-round</span></span></li>
      <li><span><i class="m-icon-upload"></i><span class="icon-name">m-icon-upload</span></span></li>
      <li><span><i class="m-icon-upload2"></i><span class="icon-name">m-icon-upload2</span></span></li>
      <li><span><i class="m-icon-download"></i><span class="icon-name">m-icon-download</span></span></li>
      <li><span><i class="m-icon-camera-solid"></i><span class="icon-name">m-icon-camera-solid</span></span></li>
      <li><span><i class="m-icon-camera"></i><span class="icon-name">m-icon-camera</span></span></li>
      <li><span><i class="m-icon-video-camera-solid"></i><span class="icon-name">m-icon-video-camera-solid</span></span>
      </li>
      <li><span><i class="m-icon-video-camera"></i><span class="icon-name">m-icon-video-camera</span></span></li>
      <li><span><i class="m-icon-message-solid"></i><span class="icon-name">m-icon-message-solid</span></span></li>
      <li><span><i class="m-icon-bell"></i><span class="icon-name">m-icon-bell</span></span></li>
      <li><span><i class="m-icon-s-cooperation"></i><span class="icon-name">m-icon-s-cooperation</span></span></li>
      <li><span><i class="m-icon-s-order"></i><span class="icon-name">m-icon-s-order</span></span></li>
      <li><span><i class="m-icon-s-platform"></i><span class="icon-name">m-icon-s-platform</span></span></li>
      <li><span><i class="m-icon-s-fold"></i><span class="icon-name">m-icon-s-fold</span></span></li>
      <li><span><i class="m-icon-s-unfold"></i><span class="icon-name">m-icon-s-unfold</span></span></li>
      <li><span><i class="m-icon-s-operation"></i><span class="icon-name">m-icon-s-operation</span></span></li>
      <li><span><i class="m-icon-s-promotion"></i><span class="icon-name">m-icon-s-promotion</span></span></li>
      <li><span><i class="m-icon-s-home"></i><span class="icon-name">m-icon-s-home</span></span></li>
      <li><span><i class="m-icon-s-release"></i><span class="icon-name">m-icon-s-release</span></span></li>
      <li><span><i class="m-icon-s-ticket"></i><span class="icon-name">m-icon-s-ticket</span></span></li>
      <li><span><i class="m-icon-s-management"></i><span class="icon-name">m-icon-s-management</span></span></li>
      <li><span><i class="m-icon-s-open"></i><span class="icon-name">m-icon-s-open</span></span></li>
      <li><span><i class="m-icon-s-shop"></i><span class="icon-name">m-icon-s-shop</span></span></li>
      <li><span><i class="m-icon-s-marketing"></i><span class="icon-name">m-icon-s-marketing</span></span></li>
      <li><span><i class="m-icon-s-flag"></i><span class="icon-name">m-icon-s-flag</span></span></li>
      <li><span><i class="m-icon-s-comment"></i><span class="icon-name">m-icon-s-comment</span></span></li>
      <li><span><i class="m-icon-s-finance"></i><span class="icon-name">m-icon-s-finance</span></span></li>
      <li><span><i class="m-icon-s-claim"></i><span class="icon-name">m-icon-s-claim</span></span></li>
      <li><span><i class="m-icon-s-custom"></i><span class="icon-name">m-icon-s-custom</span></span></li>
      <li><span><i class="m-icon-s-opportunity"></i><span class="icon-name">m-icon-s-opportunity</span></span></li>
      <li><span><i class="m-icon-s-data"></i><span class="icon-name">m-icon-s-data</span></span></li>
      <li><span><i class="m-icon-s-check"></i><span class="icon-name">m-icon-s-check</span></span></li>
      <li><span><i class="m-icon-s-grid"></i><span class="icon-name">m-icon-s-grid</span></span></li>
      <li><span><i class="m-icon-menu"></i><span class="icon-name">m-icon-menu</span></span></li>
      <li><span><i class="m-icon-share"></i><span class="icon-name">m-icon-share</span></span></li>
      <li><span><i class="m-icon-d-caret"></i><span class="icon-name">m-icon-d-caret</span></span></li>
      <li><span><i class="m-icon-caret-left"></i><span class="icon-name">m-icon-caret-left</span></span></li>
      <li><span><i class="m-icon-caret-right"></i><span class="icon-name">m-icon-caret-right</span></span></li>
      <li><span><i class="m-icon-caret-bottom"></i><span class="icon-name">m-icon-caret-bottom</span></span></li>
      <li><span><i class="m-icon-caret-top"></i><span class="icon-name">m-icon-caret-top</span></span></li>
      <li><span><i class="m-icon-bottom-left"></i><span class="icon-name">m-icon-bottom-left</span></span></li>
      <li><span><i class="m-icon-bottom-right"></i><span class="icon-name">m-icon-bottom-right</span></span></li>
      <li><span><i class="m-icon-back"></i><span class="icon-name">m-icon-back</span></span></li>
      <li><span><i class="m-icon-right"></i><span class="icon-name">m-icon-right</span></span></li>
      <li><span><i class="m-icon-bottom"></i><span class="icon-name">m-icon-bottom</span></span></li>
      <li><span><i class="m-icon-top"></i><span class="icon-name">m-icon-top</span></span></li>
      <li><span><i class="m-icon-top-left"></i><span class="icon-name">m-icon-top-left</span></span></li>
      <li><span><i class="m-icon-top-right"></i><span class="icon-name">m-icon-top-right</span></span></li>
      <li><span><i class="m-icon-arrow-left"></i><span class="icon-name">m-icon-arrow-left</span></span></li>
      <li><span><i class="m-icon-arrow-right"></i><span class="icon-name">m-icon-arrow-right</span></span></li>
      <li><span><i class="m-icon-arrow-down"></i><span class="icon-name">m-icon-arrow-down</span></span></li>
      <li><span><i class="m-icon-arrow-up"></i><span class="icon-name">m-icon-arrow-up</span></span></li>
      <li><span><i class="m-icon-d-arrow-left"></i><span class="icon-name">m-icon-d-arrow-left</span></span></li>
      <li><span><i class="m-icon-d-arrow-right"></i><span class="icon-name">m-icon-d-arrow-right</span></span></li>
      <li><span><i class="m-icon-video-pause"></i><span class="icon-name">m-icon-video-pause</span></span></li>
      <li><span><i class="m-icon-video-play"></i><span class="icon-name">m-icon-video-play</span></span></li>
      <li><span><i class="m-icon-refresh"></i><span class="icon-name">m-icon-refresh</span></span></li>
      <li><span><i class="m-icon-refresh-right"></i><span class="icon-name">m-icon-refresh-right</span></span></li>
      <li><span><i class="m-icon-refresh-left"></i><span class="icon-name">m-icon-refresh-left</span></span></li>
      <li><span><i class="m-icon-finished"></i><span class="icon-name">m-icon-finished</span></span></li>
      <li><span><i class="m-icon-sort"></i><span class="icon-name">m-icon-sort</span></span></li>
      <li><span><i class="m-icon-sort-up"></i><span class="icon-name">m-icon-sort-up</span></span></li>
      <li><span><i class="m-icon-sort-down"></i><span class="icon-name">m-icon-sort-down</span></span></li>
      <li><span><i class="m-icon-rank"></i><span class="icon-name">m-icon-rank</span></span></li>
      <li><span><i class="m-icon-loading"></i><span class="icon-name">m-icon-loading</span></span></li>
      <li><span><i class="m-icon-view"></i><span class="icon-name">m-icon-view</span></span></li>
      <li><span><i class="m-icon-c-scale-to-original"></i><span
            class="icon-name">m-icon-c-scale-to-original</span></span></li>
      <li><span><i class="m-icon-date"></i><span class="icon-name">m-icon-date</span></span></li>
      <li><span><i class="m-icon-edit"></i><span class="icon-name">m-icon-edit</span></span></li>
      <li><span><i class="m-icon-edit-outline"></i><span class="icon-name">m-icon-edit-outline</span></span></li>
      <li><span><i class="m-icon-folder"></i><span class="icon-name">m-icon-folder</span></span></li>
      <li><span><i class="m-icon-folder-opened"></i><span class="icon-name">m-icon-folder-opened</span></span></li>
      <li><span><i class="m-icon-folder-add"></i><span class="icon-name">m-icon-folder-add</span></span></li>
      <li><span><i class="m-icon-folder-remove"></i><span class="icon-name">m-icon-folder-remove</span></span></li>
      <li><span><i class="m-icon-folder-delete"></i><span class="icon-name">m-icon-folder-delete</span></span></li>
      <li><span><i class="m-icon-folder-checked"></i><span class="icon-name">m-icon-folder-checked</span></span></li>
      <li><span><i class="m-icon-tickets"></i><span class="icon-name">m-icon-tickets</span></span></li>
      <li><span><i class="m-icon-document-remove"></i><span class="icon-name">m-icon-document-remove</span></span>
      </li>
      <li><span><i class="m-icon-document-delete"></i><span class="icon-name">m-icon-document-delete</span></span>
      </li>
      <li><span><i class="m-icon-document-copy"></i><span class="icon-name">m-icon-document-copy</span></span></li>
      <li><span><i class="m-icon-document-checked"></i><span class="icon-name">m-icon-document-checked</span></span>
      </li>
      <li><span><i class="m-icon-document"></i><span class="icon-name">m-icon-document</span></span></li>
      <li><span><i class="m-icon-document-add"></i><span class="icon-name">m-icon-document-add</span></span></li>
      <li><span><i class="m-icon-printer"></i><span class="icon-name">m-icon-printer</span></span></li>
      <li><span><i class="m-icon-paperclip"></i><span class="icon-name">m-icon-paperclip</span></span></li>
      <li><span><i class="m-icon-takeaway-box"></i><span class="icon-name">m-icon-takeaway-box</span></span></li>
      <li><span><i class="m-icon-search"></i><span class="icon-name">m-icon-search</span></span></li>
      <li><span><i class="m-icon-monitor"></i><span class="icon-name">m-icon-monitor</span></span></li>
      <li><span><i class="m-icon-attract"></i><span class="icon-name">m-icon-attract</span></span></li>
      <li><span><i class="m-icon-mobile"></i><span class="icon-name">m-icon-mobile</span></span></li>
      <li><span><i class="m-icon-scissors"></i><span class="icon-name">m-icon-scissors</span></span></li>
      <li><span><i class="m-icon-umbrella"></i><span class="icon-name">m-icon-umbrella</span></span></li>
      <li><span><i class="m-icon-headset"></i><span class="icon-name">m-icon-headset</span></span></li>
      <li><span><i class="m-icon-brush"></i><span class="icon-name">m-icon-brush</span></span></li>
      <li><span><i class="m-icon-mouse"></i><span class="icon-name">m-icon-mouse</span></span></li>
      <li><span><i class="m-icon-coordinate"></i><span class="icon-name">m-icon-coordinate</span></span></li>
      <li><span><i class="m-icon-magic-stick"></i><span class="icon-name">m-icon-magic-stick</span></span></li>
      <li><span><i class="m-icon-reading"></i><span class="icon-name">m-icon-reading</span></span></li>
      <li><span><i class="m-icon-data-line"></i><span class="icon-name">m-icon-data-line</span></span></li>
      <li><span><i class="m-icon-data-board"></i><span class="icon-name">m-icon-data-board</span></span></li>
      <li><span><i class="m-icon-pie-chart"></i><span class="icon-name">m-icon-pie-chart</span></span></li>
      <li><span><i class="m-icon-data-analysis"></i><span class="icon-name">m-icon-data-analysis</span></span></li>
      <li><span><i class="m-icon-collection-tag"></i><span class="icon-name">m-icon-collection-tag</span></span></li>
      <li><span><i class="m-icon-film"></i><span class="icon-name">m-icon-film</span></span></li>
      <li><span><i class="m-icon-suitcase"></i><span class="icon-name">m-icon-suitcase</span></span></li>
      <li><span><i class="m-icon-suitcase-1"></i><span class="icon-name">m-icon-suitcase-1</span></span></li>
      <li><span><i class="m-icon-receiving"></i><span class="icon-name">m-icon-receiving</span></span></li>
      <li><span><i class="m-icon-collection"></i><span class="icon-name">m-icon-collection</span></span></li>
      <li><span><i class="m-icon-files"></i><span class="icon-name">m-icon-files</span></span></li>
      <li><span><i class="m-icon-notebook-1"></i><span class="icon-name">m-icon-notebook-1</span></span></li>
      <li><span><i class="m-icon-notebook-2"></i><span class="icon-name">m-icon-notebook-2</span></span></li>
      <li><span><i class="m-icon-toilet-paper"></i><span class="icon-name">m-icon-toilet-paper</span></span></li>
      <li><span><i class="m-icon-office-building"></i><span class="icon-name">m-icon-office-building</span></span>
      </li>
      <li><span><i class="m-icon-school"></i><span class="icon-name">m-icon-school</span></span></li>
      <li><span><i class="m-icon-table-lamp"></i><span class="icon-name">m-icon-table-lamp</span></span></li>
      <li><span><i class="m-icon-house"></i><span class="icon-name">m-icon-house</span></span></li>
      <li><span><i class="m-icon-no-smoking"></i><span class="icon-name">m-icon-no-smoking</span></span></li>
      <li><span><i class="m-icon-smoking"></i><span class="icon-name">m-icon-smoking</span></span></li>
      <li><span><i class="m-icon-shopping-cart-full"></i><span class="icon-name">m-icon-shopping-cart-full</span></span>
      </li>
      <li><span><i class="m-icon-shopping-cart-1"></i><span class="icon-name">m-icon-shopping-cart-1</span></span>
      </li>
      <li><span><i class="m-icon-shopping-cart-2"></i><span class="icon-name">m-icon-shopping-cart-2</span></span>
      </li>
      <li><span><i class="m-icon-shopping-bag-1"></i><span class="icon-name">m-icon-shopping-bag-1</span></span></li>
      <li><span><i class="m-icon-shopping-bag-2"></i><span class="icon-name">m-icon-shopping-bag-2</span></span></li>
      <li><span><i class="m-icon-sold-out"></i><span class="icon-name">m-icon-sold-out</span></span></li>
      <li><span><i class="m-icon-sell"></i><span class="icon-name">m-icon-sell</span></span></li>
      <li><span><i class="m-icon-present"></i><span class="icon-name">m-icon-present</span></span></li>
      <li><span><i class="m-icon-box"></i><span class="icon-name">m-icon-box</span></span></li>
      <li><span><i class="m-icon-bank-card"></i><span class="icon-name">m-icon-bank-card</span></span></li>
      <li><span><i class="m-icon-money"></i><span class="icon-name">m-icon-money</span></span></li>
      <li><span><i class="m-icon-coin"></i><span class="icon-name">m-icon-coin</span></span></li>
      <li><span><i class="m-icon-wallet"></i><span class="icon-name">m-icon-wallet</span></span></li>
      <li><span><i class="m-icon-discount"></i><span class="icon-name">m-icon-discount</span></span></li>
      <li><span><i class="m-icon-price-tag"></i><span class="icon-name">m-icon-price-tag</span></span></li>
      <li><span><i class="m-icon-news"></i><span class="icon-name">m-icon-news</span></span></li>
      <li><span><i class="m-icon-guide"></i><span class="icon-name">m-icon-guide</span></span></li>
      <li><span><i class="m-icon-male"></i><span class="icon-name">m-icon-male</span></span></li>
      <li><span><i class="m-icon-female"></i><span class="icon-name">m-icon-female</span></span></li>
      <li><span><i class="m-icon-thumb"></i><span class="icon-name">m-icon-thumb</span></span></li>
      <li><span><i class="m-icon-cpu"></i><span class="icon-name">m-icon-cpu</span></span></li>
      <li><span><i class="m-icon-link"></i><span class="icon-name">m-icon-link</span></span></li>
      <li><span><i class="m-icon-connection"></i><span class="icon-name">m-icon-connection</span></span></li>
      <li><span><i class="m-icon-open"></i><span class="icon-name">m-icon-open</span></span></li>
      <li><span><i class="m-icon-turn-off"></i><span class="icon-name">m-icon-turn-off</span></span></li>
      <li><span><i class="m-icon-set-up"></i><span class="icon-name">m-icon-set-up</span></span></li>
      <li><span><i class="m-icon-chat-round"></i><span class="icon-name">m-icon-chat-round</span></span></li>
      <li><span><i class="m-icon-chat-line-round"></i><span class="icon-name">m-icon-chat-line-round</span></span>
      </li>
      <li><span><i class="m-icon-chat-square"></i><span class="icon-name">m-icon-chat-square</span></span></li>
      <li><span><i class="m-icon-chat-dot-round"></i><span class="icon-name">m-icon-chat-dot-round</span></span></li>
      <li><span><i class="m-icon-chat-dot-square"></i><span class="icon-name">m-icon-chat-dot-square</span></span>
      </li>
      <li><span><i class="m-icon-chat-line-square"></i><span class="icon-name">m-icon-chat-line-square</span></span>
      </li>
      <li><span><i class="m-icon-message"></i><span class="icon-name">m-icon-message</span></span></li>
      <li><span><i class="m-icon-postcard"></i><span class="icon-name">m-icon-postcard</span></span></li>
      <li><span><i class="m-icon-position"></i><span class="icon-name">m-icon-position</span></span></li>
      <li><span><i class="m-icon-turn-off-microphone"></i><span
            class="icon-name">m-icon-turn-off-microphone</span></span></li>
      <li><span><i class="m-icon-microphone"></i><span class="icon-name">m-icon-microphone</span></span></li>
      <li><span><i class="m-icon-close-notification"></i><span class="icon-name">m-icon-close-notification</span></span>
      </li>
      <li><span><i class="m-icon-bangzhu"></i><span class="icon-name">m-icon-bangzhu</span></span></li>
      <li><span><i class="m-icon-time"></i><span class="icon-name">m-icon-time</span></span></li>
      <li><span><i class="m-icon-odometer"></i><span class="icon-name">m-icon-odometer</span></span></li>
      <li><span><i class="m-icon-crop"></i><span class="icon-name">m-icon-crop</span></span></li>
      <li><span><i class="m-icon-aim"></i><span class="icon-name">m-icon-aim</span></span></li>
      <li><span><i class="m-icon-switch-button"></i><span class="icon-name">m-icon-switch-button</span></span></li>
      <li><span><i class="m-icon-full-screen"></i><span class="icon-name">m-icon-full-screen</span></span></li>
      <li><span><i class="m-icon-copy-document"></i><span class="icon-name">m-icon-copy-document</span></span></li>
      <li><span><i class="m-icon-mic"></i><span class="icon-name">m-icon-mic</span></span></li>
      <li><span><i class="m-icon-stopwatch"></i><span class="icon-name">m-icon-stopwatch</span></span></li>
      <li><span><i class="m-icon-medal-1"></i><span class="icon-name">m-icon-medal-1</span></span></li>
      <li><span><i class="m-icon-medal"></i><span class="icon-name">m-icon-medal</span></span></li>
      <li><span><i class="m-icon-trophy"></i><span class="icon-name">m-icon-trophy</span></span></li>
      <li><span><i class="m-icon-trophy-1"></i><span class="icon-name">m-icon-trophy-1</span></span></li>
      <li><span><i class="m-icon-first-aid-kit"></i><span class="icon-name">m-icon-first-aid-kit</span></span></li>
      <li><span><i class="m-icon-discover"></i><span class="icon-name">m-icon-discover</span></span></li>
      <li><span><i class="m-icon-place"></i><span class="icon-name">m-icon-place</span></span></li>
      <li><span><i class="m-icon-location"></i><span class="icon-name">m-icon-location</span></span></li>
      <li><span><i class="m-icon-location-outline"></i><span class="icon-name">m-icon-location-outline</span></span>
      </li>
      <li><span><i class="m-icon-location-information"></i><span
            class="icon-name">m-icon-location-information</span></span></li>
      <li><span><i class="m-icon-add-location"></i><span class="icon-name">m-icon-add-location</span></span></li>
      <li><span><i class="m-icon-delete-location"></i><span class="icon-name">m-icon-delete-location</span></span>
      </li>
      <li><span><i class="m-icon-map-location"></i><span class="icon-name">m-icon-map-location</span></span></li>
      <li><span><i class="m-icon-alarm-clock"></i><span class="icon-name">m-icon-alarm-clock</span></span></li>
      <li><span><i class="m-icon-timer"></i><span class="icon-name">m-icon-timer</span></span></li>
      <li><span><i class="m-icon-watch-1"></i><span class="icon-name">m-icon-watch-1</span></span></li>
      <li><span><i class="m-icon-watch"></i><span class="icon-name">m-icon-watch</span></span></li>
      <li><span><i class="m-icon-lock"></i><span class="icon-name">m-icon-lock</span></span></li>
      <li><span><i class="m-icon-unlock"></i><span class="icon-name">m-icon-unlock</span></span></li>
      <li><span><i class="m-icon-key"></i><span class="icon-name">m-icon-key</span></span></li>
      <li><span><i class="m-icon-service"></i><span class="icon-name">m-icon-service</span></span></li>
      <li><span><i class="m-icon-mobile-phone"></i><span class="icon-name">m-icon-mobile-phone</span></span></li>
      <li><span><i class="m-icon-bicycle"></i><span class="icon-name">m-icon-bicycle</span></span></li>
      <li><span><i class="m-icon-truck"></i><span class="icon-name">m-icon-truck</span></span></li>
      <li><span><i class="m-icon-ship"></i><span class="icon-name">m-icon-ship</span></span></li>
      <li><span><i class="m-icon-basketball"></i><span class="icon-name">m-icon-basketball</span></span></li>
      <li><span><i class="m-icon-football"></i><span class="icon-name">m-icon-football</span></span></li>
      <li><span><i class="m-icon-soccer"></i><span class="icon-name">m-icon-soccer</span></span></li>
      <li><span><i class="m-icon-baseball"></i><span class="icon-name">m-icon-baseball</span></span></li>
      <li><span><i class="m-icon-wind-power"></i><span class="icon-name">m-icon-wind-power</span></span></li>
      <li><span><i class="m-icon-light-rain"></i><span class="icon-name">m-icon-light-rain</span></span></li>
      <li><span><i class="m-icon-lightning"></i><span class="icon-name">m-icon-lightning</span></span></li>
      <li><span><i class="m-icon-heavy-rain"></i><span class="icon-name">m-icon-heavy-rain</span></span></li>
      <li><span><i class="m-icon-sunrise"></i><span class="icon-name">m-icon-sunrise</span></span></li>
      <li><span><i class="m-icon-sunrise-1"></i><span class="icon-name">m-icon-sunrise-1</span></span></li>
      <li><span><i class="m-icon-sunset"></i><span class="icon-name">m-icon-sunset</span></span></li>
      <li><span><i class="m-icon-sunny"></i><span class="icon-name">m-icon-sunny</span></span></li>
      <li><span><i class="m-icon-cloudy"></i><span class="icon-name">m-icon-cloudy</span></span></li>
      <li><span><i class="m-icon-partly-cloudy"></i><span class="icon-name">m-icon-partly-cloudy</span></span></li>
      <li><span><i class="m-icon-cloudy-and-sunny"></i><span class="icon-name">m-icon-cloudy-and-sunny</span></span>
      </li>
      <li><span><i class="m-icon-moon"></i><span class="icon-name">m-icon-moon</span></span></li>
      <li><span><i class="m-icon-moon-night"></i><span class="icon-name">m-icon-moon-night</span></span></li>
      <li><span><i class="m-icon-dish"></i><span class="icon-name">m-icon-dish</span></span></li>
      <li><span><i class="m-icon-dish-1"></i><span class="icon-name">m-icon-dish-1</span></span></li>
      <li><span><i class="m-icon-food"></i><span class="icon-name">m-icon-food</span></span></li>
      <li><span><i class="m-icon-chicken"></i><span class="icon-name">m-icon-chicken</span></span></li>
      <li><span><i class="m-icon-fork-spoon"></i><span class="icon-name">m-icon-fork-spoon</span></span></li>
      <li><span><i class="m-icon-knife-fork"></i><span class="icon-name">m-icon-knife-fork</span></span></li>
      <li><span><i class="m-icon-burger"></i><span class="icon-name">m-icon-burger</span></span></li>
      <li><span><i class="m-icon-tableware"></i><span class="icon-name">m-icon-tableware</span></span></li>
      <li><span><i class="m-icon-sugar"></i><span class="icon-name">m-icon-sugar</span></span></li>
      <li><span><i class="m-icon-dessert"></i><span class="icon-name">m-icon-dessert</span></span></li>
      <li><span><i class="m-icon-ice-cream"></i><span class="icon-name">m-icon-ice-cream</span></span></li>
      <li><span><i class="m-icon-hot-water"></i><span class="icon-name">m-icon-hot-water</span></span></li>
      <li><span><i class="m-icon-water-cup"></i><span class="icon-name">m-icon-water-cup</span></span></li>
      <li><span><i class="m-icon-coffee-cup"></i><span class="icon-name">m-icon-coffee-cup</span></span></li>
      <li><span><i class="m-icon-cold-drink"></i><span class="icon-name">m-icon-cold-drink</span></span></li>
      <li><span><i class="m-icon-goblet"></i><span class="icon-name">m-icon-goblet</span></span></li>
      <li><span><i class="m-icon-goblet-full"></i><span class="icon-name">m-icon-goblet-full</span></span></li>
      <li><span><i class="m-icon-goblet-square"></i><span class="icon-name">m-icon-goblet-square</span></span></li>
      <li><span><i class="m-icon-goblet-square-full"></i><span class="icon-name">m-icon-goblet-square-full</span></span>
      </li>
      <li><span><i class="m-icon-refrigerator"></i><span class="icon-name">m-icon-refrigerator</span></span></li>
      <li><span><i class="m-icon-grape"></i><span class="icon-name">m-icon-grape</span></span></li>
      <li><span><i class="m-icon-watermelon"></i><span class="icon-name">m-icon-watermelon</span></span></li>
      <li><span><i class="m-icon-cherry"></i><span class="icon-name">m-icon-cherry</span></span></li>
      <li><span><i class="m-icon-apple"></i><span class="icon-name">m-icon-apple</span></span></li>
      <li><span><i class="m-icon-pear"></i><span class="icon-name">m-icon-pear</span></span></li>
      <li><span><i class="m-icon-orange"></i><span class="icon-name">m-icon-orange</span></span></li>
      <li><span><i class="m-icon-coffee"></i><span class="icon-name">m-icon-coffee</span></span></li>
      <li><span><i class="m-icon-ice-tea"></i><span class="icon-name">m-icon-ice-tea</span></span></li>
      <li><span><i class="m-icon-ice-drink"></i><span class="icon-name">m-icon-ice-drink</span></span></li>
      <li><span><i class="m-icon-milk-tea"></i><span class="icon-name">m-icon-milk-tea</span></span></li>
      <li><span><i class="m-icon-potato-strips"></i><span class="icon-name">m-icon-potato-strips</span></span></li>
      <li><span><i class="m-icon-lollipop"></i><span class="icon-name">m-icon-lollipop</span></span></li>
      <li><span><i class="m-icon-ice-cream-square"></i><span class="icon-name">m-icon-ice-cream-square</span></span>
      </li>
      <li><span><i class="m-icon-ice-cream-round"></i><span class="icon-name">m-icon-ice-cream-round</span></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .icon-page {
    .icon-list {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      li {
        border: 1px solid #eee;
        border-radius: 2px;
        width: 140px;
        height: 140px;
        &>span {
          display: flex;
          width: 100%;
          height: 100%;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
        }
        i {
          transition: color .15s linear;
          &:hover {
            color: $ui;
          }
          display: block;
          text-align: center;
          font-size: 32px;
          margin-bottom: 15px;
          color: #606266;
        }
        .icon-name {
          transition: color .15s linear;
          &:hover {
            color: $ui;
          }
          margin-top: 15px;
          display: block;
          text-align: center;
        }
        
      }
    }
  }
</style>