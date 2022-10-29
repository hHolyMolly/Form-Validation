function myForms(){const a=document.querySelectorAll("form"),b="Minimum 2 letters",c="Email entered incorrectly",d="Minimum 8 letters, no characters like \"./,%;\" etc.",f="Minimum 2 letters",g="Number entered incorrectly";if(0<a.length){let h=0;a.forEach(a=>{function i(a,b){const c=b.target;if(!c.classList.contains("_invalid"))c.parentElement.querySelectorAll(".field__error").forEach(a=>{a.remove()});else if(1>c.parentElement.querySelectorAll(".field__error").length){const b=`
							<div class="field__error field-error">
								<span class="field-error__icon">!</span>
								<div class="field-error__dropdown">
									${a}
								</div>
							</div>
							`;c.parentElement.insertAdjacentHTML("beforeEnd",b)}}function j(a){const b=a.target;b.classList.contains("_invalid")&&(b.classList.remove("_invalid"),b.parentElement.querySelectorAll(".field__error").forEach(a=>{a.remove()}))}function k(a){if(a.classList.contains("_required"))if(!0===a.checked)a.classList.remove("_invalid"),a.parentElement.querySelectorAll(".field__error").forEach(a=>{a.remove()});else{a.classList.add("_invalid"),h++;let b=`${"This is a required field"}`;if(1>a.parentElement.querySelectorAll(".field__error").length){const c=`
									<div class="field__error field-error">
										<span class="field-error__icon">!</span>
										<div class="field-error__dropdown">
											${b}
										</div>
									</div>
									`;a.parentElement.insertAdjacentHTML("beforeEnd",c)}}}function l(i){m.forEach(a=>{if(a.classList.contains("_required")){function e(){function b(a){return d.test(a)}const d=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;b(a.value)?a.classList.remove("_invalid"):(a.classList.add("_invalid"),h++);let e=`${c}`;k(e)}function f(){const b=/^.{8,}$/,c=/^\D.*$/,e=/^[^-() /]*$/,f=/^.*[a-zA-Z]+.*$/;b.test(a.value)&&c.test(a.value)&&e.test(a.value)&&f.test(a.value)?a.classList.remove("_invalid"):(a.classList.add("_invalid"),h++);let g=`${d}`;k(g)}function i(){p.forEach(b=>{const c=/^[\d\+][\d\(\)\ -]{4,14}\d$/,d=c.test(b.value);d?a.classList.remove("_invalid"):(a.classList.add("_invalid"),h++)});let b=`${g}`;k(b)}function j(){2>a.value.length?(a.classList.add("_invalid"),h++):a.classList.remove("_invalid")}function k(b){if(!a.classList.contains("_invalid"))a.parentElement.querySelectorAll(".field__error").forEach(a=>{a.remove()});else if(1>a.parentElement.querySelectorAll(".field__error").length){const c=`
										<div class="field__error field-error">
											<span class="field-error__icon">!</span>
											<div class="field-error__dropdown">
												${b}
											</div>
										</div>
										`;a.parentElement.insertAdjacentHTML("beforeEnd",c)}}if(j(),!a.classList.contains("_email")&&!a.classList.contains("_password")&&!a.classList.contains("_phone")){let a=`${b}`;k(a)}a.classList.contains("_email")&&e(),a.classList.contains("_password")&&f(),a.classList.contains("_phone")&&i()}}),n.forEach(a=>{if(a.classList.contains("_required"))if(2>a.value.length){a.classList.add("_invalid");let b=`${f}`;if(!a.classList.contains("_invalid"))a.parentElement.querySelectorAll(".field__error").forEach(a=>{a.remove()});else if(1>a.parentElement.querySelectorAll(".field__error").length){const c=`
										<div class="field__error field-error">
											<span class="field-error__icon">!</span>
											<div class="field-error__dropdown">
												${b}
											</div>
										</div>
										`;a.parentElement.insertAdjacentHTML("beforeEnd",c)}}else a.classList.remove("_invalid")}),o.forEach(a=>{k(a)});const e=a.querySelectorAll("._invalid");1>e.length&&(h=0),0<h&&i.preventDefault()}const m=a.querySelectorAll("input"),n=a.querySelectorAll("textarea"),o=a.querySelectorAll("input[type=\"checkbox\"]"),p=a.querySelectorAll("input[type=\"tel\"]");a.classList.contains("_required")&&(a.addEventListener("submit",l),m.forEach(a=>{a.addEventListener("focus",j)}),n.forEach(a=>{a.addEventListener("focus",j)}),m.forEach(a=>{a.addEventListener("blur",function(f){const e=f.target;if(!e.classList.contains("_invalid")){if(e.classList.add("_invalid"),!e.classList.contains("_email")&&!e.classList.contains("_password")&&!e.classList.contains("_phone"))if(2>a.value.length){a.classList.add("_invalid");let c=`${b}`;i(c,f)}else a.classList.remove("_invalid");if(e.classList.contains("_email")){function b(a){return d.test(a)}const d=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;if(!b(a.value)){a.classList.add("_invalid");let b=`${c}`;i(b,f)}else a.classList.remove("_invalid")}if(e.classList.contains("_password")){const b=/^.{8,}$/,c=/^\D.*$/,e=/^[^-() /]*$/,g=/^.*[a-zA-Z]+.*$/;if(b.test(a.value)&&c.test(a.value)&&e.test(a.value)&&g.test(a.value))a.classList.remove("_invalid");else{a.classList.add("_invalid");let b=`${d}`;i(b,f)}}if(e.classList.contains("_phone")){p.forEach(b=>{const c=/^[\d\+][\d\(\)\ -]{4,14}\d$/,d=c.test(b.value);d?a.classList.remove("_invalid"):a.classList.add("_invalid")});let b=`${g}`;i(b,f)}}})}),n.forEach(a=>{a.addEventListener("blur",function(b){const c=b.target;if(!c.classList.contains("_invalid")&&2>a.value.length){a.classList.add("_invalid");let c=`${f}`;if(i(c,b),!a.classList.contains("_invalid"))a.parentElement.querySelectorAll(".field__error").forEach(a=>{a.remove()});else if(1>a.parentElement.querySelectorAll(".field__error").length){const b=`
											<div class="field__error field-error">
												<span class="field-error__icon">!</span>
												<div class="field-error__dropdown">
													${c}
												</div>
											</div>
											`;a.parentElement.insertAdjacentHTML("beforeEnd",b)}}})}),o.forEach(a=>{a.addEventListener("change",function(){k(a)})}))})}}myForms();let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};isMobile.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc");