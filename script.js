$(document).ready(function () {

   $("#submit_btn").click(function () {
      let name = $("input[name=customer_name]").val();
      let coffee_type = $("input[name=coffee_type]:checked").val();
      let extras = [];
      $("input[name=extras]:checked").each(function () {
         extras.push($(this).val());
      });
      console.log(name, coffee_type, extras)

      let total_cost = 0;
      if (coffee_type === "turkish") {
         total_cost = total_cost + 3;
      }
      else if (coffee_type === "american") {
         total_cost = total_cost + 5;
      }
      else if (coffee_type === "iced_latte") {
         total_cost = total_cost + 7;
      }

      for (let i = 0; i < extras.length; i++) {
         let extra_item = extras[i];

         if (extra_item === "extra_coffee") {
            total_cost += 1.5;
         }
         else if (extra_item === "whipped_cream") {
            total_cost += 2;
         }
         else if (extra_item === "extra_caramel") {
            total_cost += 3;
         }
      }

      // let result = "Customer Name: " + name + "<br> Total Cost: $" + total_cost;
      let result = `Customer Name: ${name} <br> Total Cost: ${total_cost}`;
      
      $("#result").html(result);

   });


});