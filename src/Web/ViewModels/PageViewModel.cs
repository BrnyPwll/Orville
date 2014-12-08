namespace Cheapflights.Meta.Web.ViewModels {

	using System.Collections.Generic;

	public class PageViewModel {
	
		public string PageTitle {get;set;}


		public List<string> Stylesheets { get; set; }


    	public PageViewModel(){
    		Stylesheets = new List<string>();
    	}


	}
}
