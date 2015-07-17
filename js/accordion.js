function openFirstPanel() {
			$('.accordion > .accordion-head:first-child').next().addClass('active').slideDown();
			$('.accordion > .accordion-head:first-child a').addClass('active');
		}

		(function ($) {

			var allPanels = $('.accordion > .accordion-body').hide();
			var allheaders = $('.accordion > .accordion-head a');

			//openFirstPanel();

			$('.accordion > .accordion-head > a').click(function () {
				$this = $(this);
				$target = $this.parent().next();

				if ($target.hasClass('active')) {
					$target.removeClass('active').slideUp();
					$this.removeClass('active');

				} else {
					allPanels.removeClass('active').slideUp();
					allheaders.removeClass('active');
					$target.addClass('active').slideDown();
					$this.addClass('active');
				}

				if (!$(".accordion > .accordion-head a.active").length){$('.accordion-control .all-specs').removeClass('active');   }
				return false;
			});

			$('.accordion-control .all-specs').click(function () {
				$this = $(this);
				$target = $('.accordion > .accordion-body');
				if ($this.hasClass('active')) {
					$target.removeClass('active').slideUp();
					$this.removeClass('active');
					allheaders.removeClass('active');
				} else {
					$this.addClass('active');
					$target.addClass('active').slideDown();
					allheaders.addClass('active');
				}
				return false;
			});

		})(jQuery);