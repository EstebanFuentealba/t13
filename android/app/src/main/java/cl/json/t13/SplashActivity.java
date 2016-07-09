package cl.json.t13;

import android.content.Intent;
import android.content.Intent.ShortcutIconResource;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import java.util.Arrays;
import java.util.List;
import pl.droidsonroids.gif.AnimationListener;
import pl.droidsonroids.gif.GifDrawable;
import pl.droidsonroids.gif.GifImageView;

public class SplashActivity extends AppCompatActivity {
    GifImageView mSplash;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        playSplash();
    }

    private void playSplash() {
        this.mSplash = (GifImageView)findViewById(R.id.splash);
        ((GifDrawable) this.mSplash.getDrawable()).addAnimationListener(new AnimationListener(){
            public void onAnimationCompleted(int i) {
                SplashActivity.this.mSplash.setImageDrawable(new ColorDrawable(SplashActivity.this.getResources().getColor(R.color.white)));
                SplashActivity.this.goToActivity(MainActivity.class);
            }
        });
    }

    protected void onDestroy() {
        super.onDestroy();
        if (this.mSplash != null) {
            this.mSplash = null;
        }
    }

    private void goToActivity(Class<?> cls) {
        Intent intent = new Intent(this, cls);
        intent.addFlags(536870912);
        startActivity(intent);
        overridePendingTransition(17432576, 17432577);
        finish();
    }

}
