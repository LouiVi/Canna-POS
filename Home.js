"use strict"

//Create a Home object.
function Home( path, layContent )
{
var self = this;
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn");
        else lay.Animate( "FadeOut" );
    }
    
    this.Ready = function ()
{
	video.Play();
}

    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "Top,FillXY,HCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    var video = app.CreateVideoView( 1.0, -1, "FillXY" );
    video.SetOnReady( self.Ready );
    video.SetOnComplete( self.Ready );
    lay.AddChild( video );
    video.SetFile(  "Misc/splash.mp4");
    //video.Play();
    //Add a logo.
	var img = app.CreateImage( "Img/Hello.png", 0.25 );
	//lay.AddChild( img );
	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    //lay.AddChild( txt );
}

