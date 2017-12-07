<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>


    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" main>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Page Content -->
            <f7-block-title>PUMP TRACK PRESERVATION</f7-block-title>
            <f7-block inner>
              <p>The original BMX pump track covering approximately 7km2 is a historical landmark in Redditch, England. It was the first of its kind in the UK and helped usher in the popularity of BMX from America in the early 1980's with several international races.</p><p>Since the introduction of the skate park and national standard BMX track this area has become unused.</p>
            </f7-block>
            <f7-block>
              <f7-grid>
                <f7-col>
                  <f7-button open-popup="#popup">Menu</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view>
        <f7-pages>
          <f7-page>
            <f7-list>
              <f7-list-item link="/index/" link-view="#main-view" class="close-popup" title="Home"></f7-list-item>
              <f7-list-item link="/about/" link-view="#main-view" class="close-popup" title="About"></f7-list-item>
              <f7-list-item link="/timeline/" link-view="#main-view" class="close-popup" title="Timeline"></f7-list-item>
              <f7-list-item link="/form/" link-view="#main-view" class="close-popup" title="Form"></f7-list-item>
              <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" link-view="#main-view" class="close-popup" title="Dynamic Route"></f7-list-item>
            </f7-list>
            <f7-block>
	            <f7-link close-popup>Close</f7-link>
	           </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>

  </div>
</template>

<script>
export default {}
</script>
