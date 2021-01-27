<?php

namespace Fusion\Providers;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

class ConfigServiceProvider extends ServiceProvider
{
    /**
     * Register the provided services.
     * Merges in `fusioncms` overridding configs.
     *
     * @return void
     */
    public function register()
    {
        $this->registerMacro();
        $this->mergeConfigurations();
    }

    /**
     * Add `mergeDeep` macro to Arr Facade.
     *
     * @var array
     */
    protected function registerMacro()
    {
        Arr::macro('mergeDeep', function (array $arr1, array $arr2) {
            $output = array_merge($arr1, $arr2);

            foreach ($arr1 as $key => $value) {
                if (is_numeric($key) or !isset($arr2[$key])) {
                    continue;
                }

                if (is_array($value) && is_array($arr2[$key])) {
                    $output[$key] = Arr::mergeDeep($value, $arr2[$key]);
                    $output[$key] = array_unique($output[$key], SORT_REGULAR);
                }
            }

            return $output;
        });
    }

    /**
     * Merge FusionCMS configurations into existing.
     *
     * @return void
     */
    protected function mergeConfigurations()
    {
        $files = File::files(fusion_path('config'));

        foreach ($files as $file) {
            $path = $file->getPathname();
            $name = File::name($path);

            $this->app['config']->set(
                $name,
                Arr::mergeDeep(
                    $this->app['config']->get($name, []),
                    require $path
                )
            );
        }
    }
}
